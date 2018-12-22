This project based on Next.JS.
Find the most recent version of Next documentation at [Next.js repo](https://github.com/zeit/next.js) for the most 
up-to-date info.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm run dev](#npm-run-dev)
  - [npm run build](#npm-run-build)
  - [npm run start](#npm-run-start)
- [Using CSS](#using-css)
- [Adding Components](#adding-components)
- [Fetching Data](#fetching-data)
- [Custom Server](#custom-server)
- [Syntax Highlighting](#syntax-highlighting)
- [Using the `static` Folder](#using-the-static-folder)
- [Deploy to Now](#deploy-to-now)
- [Something Missing?](#something-missing)

## Folder Structure

After creating an app, it should look something like:

```
.
├── README.md
├── components
│   └── Head.tsx
├── node_modules
│   └── [...]
├── config
│   ├── development.config.ts
│   └── development.config.ts
├── pages
│   └── index.tsx
├── static
│   └── favicon.ico
├── stores
│   ├── api
│   │    └── Api.ts
│   └── provider
│        └── container.ts
├── .babelrc
├── .cz-config.js
├── .gitignore
├── .hygen.js
├── commitlint.config.js
├── jest.config.js
├── next.config.js
├── tslint.json
├── tsconfig.json
├── package.json
└── package-lock.json
```

Routing in Next.js is based on the file system, so `./pages/index.js` maps to the `/` route and
`./pages/about.js` would map to `/about`.

The `./static` directory maps to `/static` in the `next` server, so you can put all your
other static resources like images or compiled CSS in there.

Out of the box, we get:

- Automatic transpilation and bundling (with webpack and typescript)
- Hot code reloading
- Server rendering and indexing of `./pages`
- Static file serving. `./static/` is mapped to `/static/`

Read more about [Next's Routing](https://github.com/zeit/next.js#routing)

## What stuff are we used for

- [Babel](https://babeljs.io/) - inherited from the core next.js project
- [Hygen](https://hygen.io/) - For the simple and fast code generation
- [Inversify](http://inversify.io/) - For dependency injection
- [Typescript](https://www.typescriptlang.org/index.html) - For the strict check of our code
- [TsLint](https://palantir.github.io/tslint/) - to lint our code
- [Jest](https://jestjs.io/) - to test our code 
- [Commitizen](https://github.com/commitizen/cz-cli) - To easily make beautiful commits
```bash
npm install -g commitizen
```
- [Commitlint](https://github.com/marionebl/commitlint) - To check our commit messages
- Also we prefer [Mobx](https://mobx.js.org) for state management but you can chose your own.

To install mobx:
```bash
npm install mobx mobx-react 
```
- And we are fallen in love with [semantic-ui](https://react.semantic-ui.com/usage)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `npm run build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`

Starts the application in production mode.
The application should be compiled with \`next build\` first.

### `npm run lint`

Runs linter for whole application

### `npm run lint:staged`

Runs linter only on staged for commit files

### `npm run typecheck`

Runs typechecking for whole application without emitting

### `npm run test`

Runs jest for whole application. You also could run
```bash
npm run test -- --watch
```
to run jest in watch mode

## Adding Components
We are using hygen for code generation to generate component folder run:
```bash
cd components
hygen component dir --name MyComponent
```
Component will be generated in your current folder.

Component structure:
```
TodoList (in CamelCase)
├── index.ts - all public reference of the component
├── myComponent.css
├── TodoListButton.tsx
├── TodoListCheckmark.tsx
├── Todo
│    └── [...]
└── TodoList.tsx - keep in mind main component name is a directory name
``` 
**Every component is a directory! Even it's only one file**
Please keep this rule! It's really hard to maintain project with
components placed without system and hierarchy.

Rules:
1) If you'r component is a feature, it **must** be in directory;
2) You'r components may have any other feature like components;
3) If you need to split large component to smallest one You
could place them like a file see: SubComponentOne in scheme above
4) **Plain components** must be placed in a feature directory 

to generate plain sub component you could use:
```bash
cd #to directory where you want to create component
hygen component plain --name plainComponent
```

What component types we are prefer to use:
1) Functional component - stateless
2) Pure component
3) Component

When we using state:
1) To incapsulate view logic. We **never** using state for business logic
2) To maintain features over dom elements, like debounce and other stuff
3) We **never** using state for business logic or any kind of business logic in our
components
4) Read previous note again
5) **And again**

How your statefull component may looking for:
```typescript jsx
import * as React from 'react' // React importing in first place
// other stuff imports
// blank line
export interface IComponentProps { // Component - is a name of your component
  proprtyOne: string;
  // other props;
  // we never using props like onClick or onCut or native names in our props
  onItemClick(e: React.SyntheticEvent<HTMLButtonElement>): void;
  // boolean props may always be optional
  flag?: boolean;
}
// don't use state too much! At the first time you may think
// that state "make things happen", but it is not true. Prefer to use state management
// utils like Mobx
export interface IComponentState {
  // state parameters never should be optional!
  isTurnedOne: boolean;
  // we NEVER USE nested objects in state
  nestedObject: { /* some stuff */ }
}
// don't use export default
export class Component extends React.PureComponent<IComponentProps, IComponentState> {
  static getDerivedStateFromProps(): IComponentState
  
  // state are always private readonly
  private readonly state: IComponentState = {
    isTurnedOne: false
  }

  // place hooks (if needed) before render in this sequence
  // avoid to use this hook - it's deprecated
  public componentWillMount(): void {}

  // avoid to use this hook - it's deprecated
  public componentWillReceiveProps(nextProps: Readonly<IComponentProps>, nextContext: any): void {}
  
  public shouldComponentUpdate(nextProps: Readonly<IComponentProps>, nextState: Readonly<IComponentState>): boolean {}

  // avoid to use this hook - it's deprecated. Use getSnapshotBeforeUpdate
  public componentWillUpdate(nextProps: Readonly<IComponentProps>, nextState: Readonly<IComponentState>): void {}

  public componentDidUpdate(prevProps: Readonly<IComponentProps>, prevState: Readonly<IComponentState> , snapshot?: any): void {}

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {}

  public componentWillUnmount(): void {}

  // place render method
  public render() {
    // always use destruction for state and props
    const { isTurnedOne } = this.state;
    retrun (
      <div>
        <div> { isTurnedOne ? 'on' : 'off' } </div>
        <button type="button" onClick={this.handleClick} >Click</button>
        {/* avoid to use lambda in jsx */}
        <button type="button" onClick={this.handleClickWithId(id)} >Click With Id</button>
      </div>
    );
  }
  // there is no any other public methods in your component
  // and it's time to place all our private methods
  // first of all we place an event handlers
  // event handler must always be named like `handle${Something}`
  private handleClick = (e: React.SyntheticEvent<HTML{NameOfElement}Element>) => void {
    const { currentTarget } = e;
    /** some stuff here */
  }
  
  // if you need to place a value into your handler
  private handleClickWithId = (id: string) => (e: React.SyntheticEvent<HTML{NameOfElement}Element>) => void {
    /** some stuff here */
  }

  // The rest private stuff goes here
  // note: if you need to place much stuff below its a signal for you to
  // start decomposing component to a few smallest ones
}
```

How your stateless component may looking like:
```typescript jsx
import * as React from 'react' // importing react at the first place
import * as styles from './styles.css' // importing styles in the second place
// the rest of imports
// blank line
export interface IStateLessComponentProps {
  showedText: string;
  onItemClick(e: React.SyntheticEvent<HTMLDivElement>): void;
  onItemMouseDown(e: React.SyntheticEvent<HTMLDivElement>): void;
  /** props here */
}
// prefer destruction for extracting props
export function StateLessComponent({ showText, onItemClick, onItemMouseDown }: IStateLessComponentProps) {
  const customHandler = (e: React.SyntheticEvent<HTMLDivElement>) => { onItemMouseDown(e); }
  return (
    <div onClick={onItemClick} onMouseDown={customHandler} >
      { showedText }
    </div>
  );
}
```

## Using CSS

We are using plain css with css modules. You could find more information
[here](https://github.com/css-modules/css-modules)

## Fetching Data On the server

You can fetch data on server in `pages` components using `getInitialProps` like this:

### `./pages/home.tsx`

```typescript jsx
export default class Home extends Component<IHomeProps> {
  public static async getInitialProps() {
    const notes = container.get(NotesStore);
    await notes.getNotes();
    return { notes: notes.notes };
  }

  public componentDidMount(): void {
    const note = container.get(NotesStore);
    note.fromIncomingNote(this.props.notes);
  }

  public render() {
    console.log('server rendered');
    return (
      <div>
        <Head title="some page" />
        <NotesList />
      </div>
    );
  }
}
```

For the initial page load, `getInitialProps` will execute on the server only. `getInitialProps` will only be executed on the client when navigating to a different route via the `Link` component or using the routing APIs.

_Note: `getInitialProps` can **not** be used in children components. Only in `pages`._

Read more about [fetching data and the component lifecycle](https://github.com/zeit/next.js#fetching-data-and-component-lifecycle)

## Exposing public and private configuration

## Fetching Data On the client

To fetch data from the server you need to do a few simple steps:
1) We create a DTO class

What is [Dto](https://en.wikipedia.org/wiki/Data_transfer_object).  
```typescript
class IncomingNoteDto {
  @Expose({ name: '_id' })
  public id: string = '';

  @Type(() => Date)
  public createdAt: Date;
}
```
Lets look what are we done there:
1) We are declaring public property id with string type and assign a default value
2) We are decorate property as Exposed - it's mean that this property will not be excluded while serialisation
3) We are set a parameter to Expose - `{ name: '_id' }` it means that property will be exposed from a different name
4) We are set another public property named createdAt type of Date and set a Type transformer for this property. 
   Class Transformer will create a `new Date(prop)` for us, when we receive a timestamp.

2) Now we need to create a class that will store data from api
```typescript
class Note extends Api {
  public id: string = '';
  public createdAt: Date = new Date();

  public async getNote(noteId: string) {
    const { data } = await this.api.get(`/note/${noteId}`);
    this.fillSelf(this.toDTO(IncomingNoteDto, data));
  }
} 
```
`this.api` - it is Axios instance and it inhered from API.
When we called `this.toDTO(IncomingNoteDto, data)` this method was inherited from API, it will serialise data to 
exposed values in our DTO.
After it we called `this.fillSelf` - this method is also inherited from API and it fill declared above properties from
dto.

So as you see DTO is the nice way to serialise your data in a declarative manner.

## State Management And Dependency injection



## Known issues
1. component generator must throw error if --name parameter not specified ???
2. empty help screen in hygen store help
3. npm audit
4. fix head
6. api fillSelf method to private
7. remove react.node from component template
8. make type as exposed in README.md
9. hygen from app root.