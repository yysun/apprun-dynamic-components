import app, {Component} from 'apprun';

export default class aboutComponent extends Component {
  state = 'about';

  view = (state) => {
    return <div>
      <h1>{state}</h1>
    </div>
  }

  update = {
    '#about': state => state,
  }
}


// to use this component in main.tsx
// import about from './about';
// const element = document.getElementById('my-app');
// new about().start(element);
