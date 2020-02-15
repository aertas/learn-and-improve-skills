## SOLID Design Principles
 
- `S`ingle Responsibility Principle
- `O`pen-Closed Principle
- `L`iskov Substitution Principle
- `I`nterface Segregation Principle
- `D`ependency Inversion Principle

S.O.L.I.D design principles introduced by Robert C. Martin
<br> [Solid Examples](./SolidExamples)
  
## The Patterns 
#### Cretional
- **Builder** <br> When piecewise object construction is complicated, provide an API for doing it succinctly.
- **Factories** <br> A component responsible solely for the wholesale (not piecewise) creation of objects.
    - Abstract Factory
    - Factory Method
- **Prototype** <br> A partially of fully initialized object that you copy (clone) and make use of. 
- **Singleton** <br> A component which is instantiated only once.
<br> [Cretional Examples](./CreationalExamples)

#### Structural
- **Adapter** <br> A construct which adapts an existing interface X to conform to the required interface Y.
- **Bridge** <br> A mechanism that decouples an interface (hierarchy) from an implementation.
- **Composite** <br> A mechanism for treating individual (scalar) objects and compositions of objects in a uniform manner.
- **Decarator** <br> Facilitates the addition of behaviors to individual objects without inheriting from them.
- **Facade** <br> Provides a simple, easy to understand/user interface over a large and sophisticated body of code.
- **Flyweight** <br> A space optimization technique that lets us use less memory by storing externally the data associated with similar objects.
- **Proxy** <br> A class that functions as an interface to a particular resource. That resource may be remote, expensive to construct, or may require logging or some other added functions.
<br> [Structural Examples](./StructuralExamples)

#### Behavioral
- Chain of Responsibility
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template Method
- Visitor
<br> [Behavioral Examples](./BehavioralExamples)