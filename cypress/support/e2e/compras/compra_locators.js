const compras_locarots = {

    PURCHASE_FORM: {
        ELEMENT_OPEN_COMPUTERS: '.notmobile > :nth-child(1) > [href="/computers"]',
        ELEMENT_OPEN_NOTEBOOKS: ':nth-child(2) > .sub-category-item > .picture > a > img',
        APPLE_MACBOOK_PRO_13: "h2.product-title a:contains('Apple MacBook Pro 13-inch')",
        BUTTON_ADD_TO_CART:'button[id="add-to-cart-button-4"]',
        ELEMENT_SHOPPING_TO_CART: '.ico-cart',
        TERM_OF_SERVICE: '#termsofservice',
        BUTTON_CHECKOUT: '#checkout',
        SELECT_COUTRY: '#BillingNewAddress_CountryId',
        SELECT_STATE: '#BillingNewAddress_StateProvinceId',
        CITY: '#BillingNewAddress_City',
        ADDRESS_1: '#BillingNewAddress_Address1',
        ADDRESS_2: '#BillingNewAddress_Address2',
        ZIP_CODE: '#BillingNewAddress_ZipPostalCode',
        PHONE_NUMBER: '#BillingNewAddress_PhoneNumber',
        FAX_NUMBER: '#BillingNewAddress_FaxNumber',
        BUTTON_CONTINUE: '#billing-buttons-container > .new-address-next-step-button'
    },
     
    SHIPPING_METHOD:{
        SELECT_SHIPPING: '#shipping-method-buttons-container > .button-1',
        BUTTON_CONTINUE: '#shippingoption_0'
    },

    PAYMENT_METHOD:{
        MONEY_ORDER: '#paymentmethod_0',
        BUTTON_CONTINUE: '#payment-method-buttons-container > .button-1'
    },

    PAYMENT_INFORMATION :{
        BUTTON_CONTINUE:'#payment-info-buttons-container > .button-1'
    },
    
    CONFIRM_ORDER:{
        BUTTON_CONFIRM_ORDER:'#confirm-order-buttons-container > .button-1',
        
    },
    
    PURCHASE_END_SCREEN:{
        BUTTON_CONTINUE:'.section > .buttons > .button-1'
    }



}
export default compras_locarots;