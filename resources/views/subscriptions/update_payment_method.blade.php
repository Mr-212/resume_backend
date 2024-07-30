@extends('layouts.app')

@section('content')
    <div class="row bg-gray-200 h-screen p-10">

        <div class="col-md-6">
            <div class="p-5 card shadow h-96">
                <header>
                    {{ $plan->title }}
                </header>
                <div class="card-body">
                    <p>{{ $plan->price }}</p>
                    <p>{{ $plan->type }}</p>
                    <p>{{ $plan->interval }}</p>

                </div>
            </div>

        </div>
        @if(!empty($paymentMethods))
        <div class="col-md-6">
            <div class="p-4 card shadow bg-gray-50 h-96">
                <div class="header border-b-2 border-gray-400 py-2">
                    <h4 class="text-center font-bold text-md py-2 text-black">Select Payament Method</h4>
                    </div>
                <div class="card-body">
                    @foreach ($paymentMethods as $paymentMethod )
                    <div class="flex flex-row justify-start space-x-2 shadow-lg">
                        <input class="" type="radio" name="paymentMethod" value="{{ $paymentMethod->id}}" />
                        <div class="flex flex-row justify-start space-x-2 w-full text-black font-bold">
                            <span class="">{{ $paymentMethod->card->brand }}</span>
                            <span class="">{{ $paymentMethod->card->last4 }}</span>
                            <span class="">{{ $paymentMethod->card->exp_month }} / {{ $paymentMethod->card->exp_year }}</span>

                        </div>
                    </div>

                    @endforeach
                </div>
            </div>
            @endif

            <div class="p-5 card shadow bg-gray-50 h-96">
                <div class="header border-b-2 border-gray-400 py-2">
                    <h4 class="text-center font-bold text-md py-2 text-black">Add Payment Method Info</h4>
                </div>

                <form class="card-body space-y-3" id="payment_form" action="/subscription" method="post">
                    @csrf
                    <input type="hidden" name="payment_method_id" id='payment_method_id' />
                    <input type="hidden" name="plan_id" value="{{$plan_id}}" />

                    <input class="w-full text-sm  border-b-2 outline-none" id="card-holder-name" placeholder="Card Holder Name" type="text">

                    <!-- Stripe Elements Placeholder -->
                    <div class="py-1" id="card-element">

                    </div>
                    <button type="button" class="w-full py-2 bg-blue-900 text-gray-50 hover:bg-black hover:text-white rounded-none float-right font-bold" id="card-button" data-secret="{{ $intent->client_secret }}">
                        Subscribe
                    </button>

                </form>

            </div>
        </div>


    </div>
@endsection


@push('scripts')
<script src="https://js.stripe.com/v3/"></script>

<script>

    console.log("{{env('STRIPE_KEY')}}")
    const stripe = Stripe("pk_test_51L2wxGDoh4KpmE6IrbjsAB1Lig622SuWSoQBrljuhf95bxtEq2jdpnIVJDDYfkoPxmzvdgXYSRdwRWySQyW8JiBj00HSGY1FSy");
    const elements = stripe.elements();
    const cardElement = elements.create('card',{ hidePostalCode: true });
    cardElement.mount('#card-element');

    const cardHolderName = document.getElementById('card-holder-name');
    const cardButton = document.getElementById('card-button');
    const clientSecret = cardButton.dataset.secret;

    cardButton.addEventListener('click', async (e) => {
        const { setupIntent, error } = await stripe.confirmCardSetup(
            clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: { name: cardHolderName.value }
                }
            }
        );



        if (error) {
            // Display "error.message" to the user...
            alert(error.message);
        } else {
            // console.log(setupIntent);
            if(setupIntent.payment_method  != ""){
                document.getElementById('payment_method_id').value = setupIntent.payment_method;
                document.getElementById('payment_form').submit();
            }
            //console.log("The card has been verified successfully...");
        }
    });
</script>


@endpush

