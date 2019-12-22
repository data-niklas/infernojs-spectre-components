# Infernojs-spectre-components

UI Components for InfernoJS made with Spectre

**InfernoJS** is a really good alternative to **React**, because it is so fast and minimalistic, but there are almost no UI libraries with pre-built components.

What would happen, if one would combine **InfernoJS** and a CSS library and create components, styled with that CSS library?

That´s exactly what I did!

I combined https://infernojs.org/ with https://github.com/picturepan2/spectre

In order to keep everything minimalistic, InfernoJS was used **without** JSX. No NodeJS modules needed, to compile the JSX code to JS.

## How to use

1.  Clone the *lib* folder into your Project
    
2.  Create a JS file (e.g.: index.js) and import it into your .html file as a module
    
3.  Now import the render method from the inferno.js file and the createComponent from the inferno-create-element file and render a InfernoJS Component on a html component
    
    Note: using c as a shorthand for the createElement method
    
    ```js
    import { render } from './lib/inferno.js';import { createElement as c } from './lib/inferno-create-element.js'import App from './App.js'render(c(App, null, null), document.getElementById('root'));
    ```
    

4.  In this case App.js would export a InfernoJS component and render it on the div with the id *div*
    
5.  In the JS file, where the InfernoJS components are declared, import createElement and all of the infernojs-spectre-components, which you need and use them in the render method of the component
    

## Documentation

-   View the Spectre documentation, to see all of the Spectre components with their *features* and *examples* (Page also made with Spectre)
    
-   Also view the InfernoJS documentation for help
    
-   You should be able to use JSX and then compile it to JS
    
-   Supported Components:
    
    -   Container
        
        -   ButtonGroup
            
        -   Card
            
        -   Columns
            
        -   Container
            
        -   FormGroup
            
        -   InputGroup
            
        -   Panel
            
    -   Dialog
        
        -   Modal
            
        -   Popover
            
        -   Toast
            
    -   Form
        
        -   Dropdown
            
        -   Input
            
        -   Select
            
        -   Step
            
    -   Navigation
        
        -   Accordion
            
        -   Avatar
            
        -   Breadcrumbs
            
        -   Menu
            
        -   Nav
            
        -   Navbar
            
        -   Pagination
            
        -   Tabs
            
    -   Core
        
        -   Bar
            
        -   BlockQuote
            
        -   Button
            
        -   Chip
            
        -   Code
            
        -   Context
            
        -   Empty
            
        -   Hero
            
        -   Icon
            
        -   Image
            
        -   Label
            
        -   Link
            
        -   Table
            
        -   Text
            
        -   Tile
            

## Production

-   Use the sources from the production folder, they have been minified
    
-   Read through the comments above each component, to see, which props you can pass
    

## Notes

-   Context.js file adds *Context* support, similar to Mobx for inferno [https://github.com/infernojs/inferno/tree/master/packages/inferno-mobx](https://github.com/infernojs/inferno/tree/master/packages/inferno-mobx)
    
    -   create a *Context* with the **createCtx(<contextName>)** method
        
    -   subscribe to a *Context* anywhere with the
        
        ```js
        this.subscribe()
        ```
        
        method inside of a *Component*
        
    -   Set the contexts value from anywhere with the **setCtx(<contextName>,<contextValue>)**
        
    -   The subscribed *Components* state will be automatically be changed and it will contain a variable named like the *Context*
