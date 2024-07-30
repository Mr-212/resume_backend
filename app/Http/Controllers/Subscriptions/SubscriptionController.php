<?php

namespace App\Http\Controllers\Subscriptions;

use App\Http\Controllers\Controller;
use App\Models\Subscriptions\Plan;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Cashier\Subscription;
use Illuminate\Support\Facades\Session;

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

        // dd($request->all());
        $this->user = Auth::user();
        if($request->has('trial_days'))
        {
            Session::put($this->user->id.'_trial_days',$request->get('trial_days'));
        }

        // if($this->user->subscr())

        // dd(Session::get($this->user->id.'_trial_days'));
        $plan_id = $request->plan_id;
        $plan = Plan::whereStripeId($plan_id)->firstOrFail();
        $paymentMethods = $this->user->paymentMethods();
        // dd($paymentMethods->card);
        //  dd($this->user->subscribedToPrice($plan->stripe_id));
        // dd($plan->stripe_id);


        // if($this->user->checkStripePrice($plan->stripe_id))
        if($this->user->subscription($plan->title))
        {
            // dd('user alredy subscibed to that plan');
            // return view('subscriptions.subscribed');
            // return redirect()->back();
        }
        $intent = $this->user->createSetupIntent();
        return view('subscriptions.update_payment_method',compact('intent','plan_id','plan','paymentMethods'));
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
                $trial_days = 0;
                if(Session::has($this->user->id.'_trial_days'))
                {
                    $trial_days = Session::get($this->user->id.'_trial_days');
                }


                // if($this->user->subscribed($subscriptionProduct->stripe_id))
                // if($this->user->subscribedToPrice($subscriptionProduct->stripe_id, $subscriptionProduct->title))
                if($this->user->subscribed($subscriptionProduct->title))
                {
                    // return redirect('subscription.subscibed');
                    dd("already subscribed", $subscriptionProduct->title);

                }else
                {
                    $subscription = $this->user->newSubscription($subscriptionProduct->title, $request->plan_id);
                    if($trial_days) $subscription = $subscription->trialDays($trial_days);
                    $subscription = $subscription->create($request->payment_method_id);
                    if($subscription->stripe_id)
                    {
                        // if($subscription->onTrial())
                        // {
                        //     dd('on trial');
                        // }
                        return view('subscriptions.subscribed');
                    }
                }

                return;


            }

        }catch(Exception $e){
            dd($e->getTraceAsString());
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
