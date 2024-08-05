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

        <div class="col-md-6">
            @if(!empty($paymentMethods))

            @endif

            <div class="p-5 card shadow bg-gray-50 h-96">
                <div class="header border-b-2 border-gray-400 py-2">
                    <h4 class="text-center font-bold text-md py-2 text-black">Payment Method Info</h4>
                </div>

                <div>
                    @if(!empty($paymentMethods))
                    <div>

                        <input type="radio" name="radio_payment" id="select_existing_card" class="radio_payment_method" value="existing"/>
                        <label for="select_existing">Select Existing Payment Method</label>
                    </div>
                    @endif

                    <div>
                        <input type="radio" name="radio_payment" id="add_new_card" class="radio_payment_method" value="new" />
                        <label for="add_new_card">Add New Card</label>
                    </div>
                </div>


                <form class="card-body space-y-3" id="payment_form" action="/subscription" method="post">
                    @csrf
                    <input type="hidden" name="payment_method_id" id='payment_method_id' />
                    <input type="hidden" name="plan_id" value="{{$plan_id}}" />


                    @if(!empty($paymentMethods))
                    <div class="select_card mb-2">

                        <select class="form-control border-none bg-gray-400 rounded-none" id="select_payment_method_id" placeholder="">
                            @foreach ($paymentMethods as $paymentMethod )
                                <option value="{{ $paymentMethod->id }}">
                                    <div class="flex flex-row justify-start space-x-2 shadow-lg">
                                        <div class="flex flex-row justify-start space-x-2 w-full text-black font-bold">
                                            <span class="">{{ $paymentMethod->card->brand }}</span>
                                            <span class="">{{ $paymentMethod->card->last4 }}</span>
                                            <span class="">{{ $paymentMethod->card->exp_month }} / {{ $paymentMethod->card->exp_year }}</span>
                                        </div>
                                    </div>
                                </option>
                            @endforeach
                        </select>
                    </div>
                    @endif

                    <div class="add_card">
                        {{-- <input type="radio" name="payment_methood" /> --}}


                        <h4 class="text-center font-bold text-md py-2 text-black">Add Payment Method</h4>

                        <input class="w-full text-sm  border-b-2 outline-none" id="card-holder-name" placeholder="Card Holder Name" type="text">

                        <!-- Stripe Elements Placeholder -->
                        <div class="py-1" id="card-element">
                        </div>
                    </div>


                    </div>
                    <button type="button" class="w-full py-2 bg-blue-900 text-gray-50 hover:bg-black hover:text-white rounded-none float-right font-bold" id="card-button" data-secret="{{ $intent->client_secret }}">
                        Checkout
                    </button>

                </form>

            </div>
        </div>


    </div>
@endsection


@push('scripts')
<script src="https://js.stripe.com/v3/"></script>

<script>

    // $(document).ready(function() {

        // $('.radio_payment_method').change(function() {
        //     console.log('inside');
        //     var is_checked = $('.radio_payment_method:checked').val();
        //     console.log(is_checked);

        //     if($('.radio_payment_method').is(':checked')){
        //         var is_checked = $('.radio_payment_method:checked').val();
        //         console.log(is_checked);
        //     }
        // });

        var radio;

        var radio = document.querySelectorAll('.radio_payment_method').forEach(function(element) {

           element.addEventListener('change', function(event) {

            var is_checked = document.querySelector('.radio_payment_method:checked').value;
            radio = is_checked;
            console.log(radio);

            if(is_checked == 'new'){
                document.querySelector('.select_card').style.display = 'none';
                document.querySelector('.add_card').style.display = 'block';
            }
            if(is_checked == 'existing'){
                document.querySelector('.select_card').style.display = 'block';
                document.querySelector('.add_card').style.display = 'none';
            }


           });

        })


    // });
</script>

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

        if(radio == 'new') {
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
        }
        if(radio == 'existing'){
            var id = document.getElementById('select_payment_method_id').value;
            // console.log(id, radio);
            document.getElementById('payment_method_id').value = id;
            document.getElementById('payment_form').submit();
        }

    });
</script>


@endpush

