import app, {Component} from 'apprun';

export default class contactComponent extends Component {
  state = 'contact';

  view = (state) => {
    return <div>
      <h1>{state}</h1>
    </div>
  }

  update = {
    '#contact': state => state,
  }
}


// to use this component in main.tsx
// import contact from './contact';
// const element = document.getElementById('my-app');
// new contact().start(element);
