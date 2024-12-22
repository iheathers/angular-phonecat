// Simulate AngularJS component system
function initializeComponent(componentDef) {

    debugger
    // Step 1: Create an instance of the controller using `new`
    const controllerInstance = new componentDef.controller();

    // Step 2: Bind the controller instance to the template
    const template = componentDef.template.replace(/\{\{\$ctrl\.(.*?)\}\}/g, (match, prop) => {
        return controllerInstance[prop]; // Replace {{property}} with controller's data
    });

    // Step 3: Render the template
    const rootElement = document.createElement('div');
    rootElement.innerHTML = template;
    document.body.appendChild(rootElement);

    console.log('Rendered Template:', rootElement.innerHTML);
}

// Define a "component"
const greetUserComponent = {
    template: '<p>Hello, {{$ctrl.user}}</p>',
    controller: function GreetUserController() {
        this.user = 'there'; // Initialize data
        console.log('Controller instance:', this);
    }
};

// Initialize the component
initializeComponent(greetUserComponent);
