<?php

namespace App\Http\Controllers\Subscriptions;

use App\Http\Controllers\Controller;
use App\Models\Subscriptions\Plan;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Cashier\Subscription;

class SubscriptionController extends Controller
{


    private $user, $plan;

    public function __construct(User $user, Plan $plan)
    {
        $this->user = Auth::user();
        $this->plan = $plan;
       // $this->user = $user;

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $plans = $this->plan->orderBy('price','asc')->get();

        return view('subscriptions.index',['plans' => $plans]);
    }


    public function subscriptions()
    {

        // dd(Auth::user());

        $subscriptions = Auth::user()->subscriptions;
        // $subs  = Subscription::query()->get();

        dd($subscriptions);
        return view('subscriptions.index',['plans' => $plans]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

        // dd(Auth::user());
        $this->user = Auth::user();
        $plan_id = $request->plan_id;
        $plan = Plan::whereStripeId($plan_id)->firstOrFail();
        //  dd($this->user->subscribedToPrice($plan->stripe_id));
        // dd($plan->stripe_id);


        if($this->user->checkStripePrice($plan->stripe_id))
        {
            // dd('user alredy subscibed to that plan');
            return view('subscriptions.subscribed');
            // return redirect()->back();
        }
        $intent = $this->user->createSetupIntent();
        return view('subscriptions.update_payment_method',compact('intent','plan_id','plan'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $this->user = Auth::user();

        try{

            if($request->has('plan_id'))
            {
                // if(!$this->user->hasPaymentMethod())
                //     $this->updateDefaultPaymentMethod($request->payment_method_id);
                $plan_id = $request->plan_id;
                $subscriptionProduct = $this->plan->where('stripe_id',$plan_id)->first();


                // if($this->user->subscribed($subscriptionProduct->stripe_id))
                if($this->user->subscribedToPrice($subscriptionProduct->stripe_id))
                {
                    // return redirect('subscription.subscibed');
                    dd("already subscribed", $subscriptionProduct->title);

                }else
                {
                    $subscription = $this->user->newSubscription('default', $request->plan_id)->create($request->payment_method_id);
                    if($subscription->stripe_id)
                    {
                        return view('subscriptions.subscribed');
                    }
                    // dd($subscription);
                }

                return;


            }

        }catch(Exception $e){
            dd($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
