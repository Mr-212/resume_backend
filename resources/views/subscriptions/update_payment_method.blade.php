@extends('layouts.app')

@section('content')
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-slate-100 h-screen p-10">

        {{-- Plan Information Section --}}
        <div class="p-8 bg-slate-800 text-white shadow-lg rounded-lg border border-slate-700">
            <header class="text-3xl font-bold mb-6">
                {{ $plan->product_name }}
            </header>
            <div class="space-y-5">
                <p class="text-lg"><strong>Price:</strong> {{ $plan->price }}</p>
                <p class="text-lg"><strong>Type:</strong> {{ $plan->type }}</p>
                <p class="text-lg"><strong>Interval:</strong> {{ $plan->interval }}</p>
            </div>
        </div>

        {{-- Payment Method Section --}}
        <div class="p-8 bg-slate-50 shadow-lg rounded-lg">
            <div class="border-b-2 pb-4 mb-4 text-center">
                <h4 class="text-xl font-semibold text-slate-700">Payment Method Info</h4>
            </div>

            <form id="payment_form" action="/subscription" method="post" class="space-y-6">
                @csrf
                <input type="hidden" name="payment_method_id" id='payment_method_id' />
                <input type="hidden" name="plan_id" value="{{$plan_id}}" />

                <div class="space-y-4">
                    {{-- Existing Payment Method Option --}}
                    @if(!empty($paymentMethods))
                        <div>
                            <input type="radio" name="radio_payment" id="select_existing_card" class="radio_payment_method" value="existing" />
                            <label for="select_existing" class="text-slate-700 font-semibold ml-2">Select Existing Payment Method</label>
                        </div>
                    @endif

                    {{-- Add New Card Option --}}
                    <div>
                        <input type="radio" name="radio_payment" id="add_new_card" class="radio_payment_method" value="new" />
                        <label for="add_new_card" class="text-slate-700 font-semibold ml-2">Add New Card</label>
                    </div>

                    {{-- Existing Payment Methods Dropdown --}}
                    @if(!empty($paymentMethods))
                        <div class="select_card">
                            <select class="w-full bg-slate-200 rounded-lg p-2" id="select_payment_method_id">
                                @foreach ($paymentMethods as $paymentMethod )
                                    <option value="{{ $paymentMethod->id }}">
                                        {{ $paymentMethod->card->brand }} **** {{ $paymentMethod->card->last4 }} ({{ $paymentMethod->card->exp_month }}/{{ $paymentMethod->card->exp_year }})
                                    </option>
                                @endforeach
                            </select>
                        </div>
                    @endif

                    {{-- New Card Form --}}
                    <div class="add_card hidden">
                        <h4 class="text-center text-lg font-semibold text-slate-700">Add Payment Method</h4>
                        <input class="w-full p-2 bg-slate-100 border rounded-lg focus:ring-2 focus:ring-indigo-600" id="card-holder-name" placeholder="Card Holder Name" type="text">
                        <div id="card-element" class="bg-white p-3 mt-3 rounded-lg shadow-inner"></div>
                    </div>
                </div>

                {{-- Checkout Button --}}
                <button type="button" class="w-full py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-900" id="card-button" data-secret="{{ $intent->client_secret }}">
                    Checkout
                </button>
            </form>
        </div>

    </div>
@endsection

@push('scripts')
<script src="https://js.stripe.com/v3/"></script>

<script>
    // Toggle between payment method options
    var radio;
    document.querySelectorAll('.radio_payment_method').forEach(function(element) {
        element.addEventListener('change', function(event) {
            var is_checked = document.querySelector('.radio_payment_method:checked').value;
            radio = is_checked;

            if (is_checked == 'new') {
                document.querySelector('.select_card').classList.add('hidden');
                document.querySelector('.add_card').classList.remove('hidden');
            }
            if (is_checked == 'existing') {
                document.querySelector('.select_card').classList.remove('hidden');
                document.querySelector('.add_card').classList.add('hidden');
            }
        });
    });

    // Stripe API Integration
    const stripe = Stripe("{{env('STRIPE_KEY')}}");
    const elements = stripe.elements();
    const cardElement = elements.create('card', { hidePostalCode: true });
    cardElement.mount('#card-element');

    const cardHolderName = document.getElementById('card-holder-name');
    const cardButton = document.getElementById('card-button');
    const clientSecret = cardButton.dataset.secret;

    cardButton.addEventListener('click', async (e) => {
        if (radio == 'new') {
            const { setupIntent, error } = await stripe.confirmCardSetup(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: { name: cardHolderName.value }
                }
            });

            if (error) {
                alert(error.message);
            } else if (setupIntent.payment_method) {
                document.getElementById('payment_method_id').value = setupIntent.payment_method;
                document.getElementById('payment_form').submit();
            }
        }

        if (radio == 'existing') {
            var id = document.getElementById('select_payment_method_id').value;
            document.getElementById('payment_method_id').value = id;
            document.getElementById('payment_form').submit();
        }
    });
</script>
@endpush
