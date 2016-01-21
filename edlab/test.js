var paypal = require('../'); //paypal-rest-sdk

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AeFS2gHFI9FwJ5NU53KUd-QvJT3AznTBAh80_rUIKLv-l8KwNDUDdQahHvJtxWS7jfaHKso8X1MEADK-',
    'client_secret': 'EHy2G5Yrzab01N3VqZi63JvFhDsDhsPbVdcP5axBJeCLwohxVB0s_0gMBW7pEHHjSc5NF-w0ZIUY4Xb5'
});

var create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "credit_card",
        "funding_instruments": [{
		"credit_card": {
		    "type": "visa",
		    "number": "4417119669820331",
		    "expire_month": "11",
		    "expire_year": "2018",
		    "cvv2": "874",
		    "first_name": "Joe",
		    "last_name": "Shopper",
		    "billing_address": {
			"line1": "52 N Main ST",
			"city": "Johnstown",
			"state": "OH",
			"postal_code": "43210",
			"country_code": "US"
		    }
		}
	    }]
    },
    "transactions": [{
	    "amount": {
		"total": "7",
		"currency": "USD",
		"details": {
		    "subtotal": "5",
		    "tax": "1",
		    "shipping": "1"
		}
	    },
	    "description": "This is the payment transaction description."
	}]
};

paypal.payment.create(create_payment_json, function (error, payment) {
	if (error) {
	    throw error;
	} else {
	    console.log("Create Payment Response");
	    console.log(payment);
	}
    });

