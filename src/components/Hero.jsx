import CartIcon from "../assets/CartIcon"

export default function Hero() {
  return (
    <section>
      <div>
        <h1>
          Enjoy your <span>coffee</span> before your activity
        </h1>
        <p>
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </p>
        <div>
          <button>
            Order Now
            <CartIcon />
          </button>
          <button>More menu</button>
        </div>
      </div>
      {/* <div>
        <img
          src='https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          alt=''
        />
      </div> */}
    </section>
  )
}
