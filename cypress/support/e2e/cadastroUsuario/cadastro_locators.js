
const cadastro_locators = {

    USER_REGISTER_FORM: {
        BUTTON_OPEN_REGISTER: '.ico-register',
        GENDER_MALE: '#gender-male',
        GENDER_FEMALE:'#gender-female',
        FIRST_NAME: '#FirstName',
        LAST_NOME: '#LastName',
        DATE_OF_BIRTH_DAY: 'select[name="DateOfBirthDay"]',
        DATE_OF_BIRTH_MONTH: 'select[name="DateOfBirthMonth"]',
        DATE_OF_BIRTH_YEAR: 'select[name="DateOfBirthYear"]',
        EMAIL: '#Email',
        COMPANY_NAME:'#Company',
        NEWSLETTER: '#Newsletter',
        PASSWORD: '#Password',
        CONFIRM_PASSWORD: '#ConfirmPassword',
        BUTTON_REGISTER : '#register-button',  
        MENSAGEM_SUCESSO: '.result',
        BUTTON_CONTINUE:'.buttons > .button-1'
    },
    
    USER_REGISTER_FORM_MESSAGE: {
        FIRST_NAME_MESSAGE_ERROR: '#FirstName-error',
        LAST_NAME_MESSAGE_ERROR:  '#LastName-error',
        EMAIL_MESSAGE_ERROR: '#Email-error',
        PASSWORD_MESSAGE_ERROR: '#Password-error',  
        DIFFERENT_PASSWORD_MESSAGE:'DSADA',
        CONFIRM_PASSWORD_MESSAGE_ERROR: '#ConfirmPassword-error'
        
    }



}

    export default cadastro_locators;