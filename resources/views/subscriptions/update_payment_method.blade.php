@extends('layouts.app')

@section('content')
    <div class="row">
       
        <div class="col-md-6">

        </div>    
        <div class="col-md-4 border shadow bg-gray-50 p-3 space-y-5 float-right">
            <div class="border-b-2 border-blue-400 py-2">
                <h4 class="font-bold text-md">Payment Method Info</h4>
            </div>
            <div class="space-y-2">

                <input class="form-control form-control-sm outline-none" id="card-holder-name" placeholder="Card Holder Name" type="text">
    
                <!-- Stripe Elements Placeholder -->
                <div class="form-control form-control-sm" id="card-element"></div>
                
                <button type="button" class="px-2 py-1 bg-blue-400 text-gray-50  hover:bg-black hover:text-white rounded-none float-right font-bold" id="card-button" data-secret="{{ $intent->client_secret }}">
                    Update Payment Method
                </button>
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
    const cardElement = elements.create('card');
 
    cardElement.mount('#card-element');
</script>

<script>
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
        } else {
            // The card has been verified successfully...
        }
    });
</script>


@endpush

