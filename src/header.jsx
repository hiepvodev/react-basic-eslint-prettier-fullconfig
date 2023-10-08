const lastName = 'Hiep'

const sum = (a, b) => a + b

const element = (
  <h1>
    Hello world, I am {lastName}, i'm {sum(10, 13)} years old.
  </h1>
)

const element2 = <a href='google.com' tabIndex='11' className='123' id='abc'></a>

const element3 = <h3 />

const element4 = <img src='' />

const element5 = <input type='text' />

const comment = `<script>console.log("send token")</script>`

const element6 = <h1 className='greeting'>Hello world!</h1>

const element7 = React.createElement('h1', { className: 'greeting' }, 'Hello, world')
