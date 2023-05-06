import CoffeeCupImg from "./assets/img/coffee-cup.png"
import CoffeeImg from "./assets/img/coffee.png"
import CoffeeDelImg from "./assets/img/food-truck.png"

export const products = [
  {
    id: 112121,
    title: "Vanilla Latte",
    price: 5,
    tags: ["Smooth", "Creamy", "Vanilla"],
    rating: 4.8,
    desc: "Satisfy your sweet tooth with our creamy Vanilla Latte.",
    image:
      "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 112122,
    title: "Espresso",
    price: 9,
    tags: ["Intense", "Italian"],
    rating: 4.2,
    desc: "Fuel your day with a shot of our bold Espresso.",
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 112123,
    title: "Hazelnut Latte",
    price: 5,
    tags: ["Nutty", "Creamy", "Smooth"],
    rating: 3.9,
    desc: "Indulge in the nutty flavor of our Hazelnut Latte.",
    image:
      "https://images.unsplash.com/photo-1637959741616-16c7bfe9300b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
]

export const specialMenuProducts = [
  {
    id: 686121,
    title: "Sandwich",
    price: 6,
    rating: 4.8,
    desc: "Satisfy your hunger with our freshly-made sandwiches.",
    image:
      "https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
  },
  {
    id: 686122,
    title: "Cocoa Milk",
    price: 9,
    rating: 4.2,
    desc: "Warm up with the comforting taste of our cocoa milk.",
    image:
      "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 686123,
    title: "Coffee Ice Cream",
    price: 5,
    rating: 3.9,
    desc: "Indulge in our creamy coffee ice cream, the perfect treat for any time of day.",
    image:
      "https://images.unsplash.com/photo-1558722141-76ef6ca013be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 686124,
    title: "Waffle Ice Cream",
    price: 9,
    rating: 4.5,
    desc: "Experience the ultimate indulgence with our delicious waffle ice cream.",
    image:
      "https://images.unsplash.com/photo-1656517092618-0902a2f8b5ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 686125,
    title: "Cappucino",
    price: 15,
    rating: 4.5,
    desc: "Savor the rich, velvety flavor of our authentic Italian cappuccino.",
    image:
      "https://images.unsplash.com/photo-1581451150297-cb5a19b572e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    id: 686126,
    title: "Mocha Latte",
    price: 25,
    rating: 3.8,
    desc: "Decadent chocolate and smooth espresso, the perfect pick-me-up.",
    image:
      "https://images.unsplash.com/photo-1633871676920-df29763dcee7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
]

export const deliveryData = [
  {
    id: 111,
    title: "Choose your coffee",
    subtitle: "There are 20+ coffees specially for you.",
    image: CoffeeImg,
  },
  {
    id: 112,
    title: "Select the delivery service",
    subtitle: "We have outlets in 50+ different cities.",
    image: CoffeeDelImg,
  },
  {
    id: 113,
    title: "Coffee at your doorstep",
    subtitle: "Enjoy your coffee, and have a relax day ahead.",
    image: CoffeeCupImg,
  },
]

export const aboutUsData = {
  title: "About Us",
  subtitle: "We provide quality coffee, and ready to deliver.",
  desc: "We are a company that makes and distributes delicious drinks. our main product is made with a secret recipe and available in stores worldwide.",
  btnText: "Get your coffee",
  image:
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
}

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    occupation: "Software Engineer",
    quote:
      "I love the Vanilla Latte! It's the perfect blend of sweetness and caffeine to start my day.",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 2,
    name: "Jane Smith",
    occupation: "Graphic Designer",
    quote:
      "The Hazelnut Latte is my go-to drink. It's like a warm hug in a cup!",
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 3,
    name: "Bob Johnson",
    occupation: "Accountant",
    quote: "The Espresso is the perfect pick-me-up during a long day of work.",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Emily Davis",
    occupation: "Marketing Manager",
    quote:
      "The Waffle Ice Cream is so delicious! It's the perfect treat on a hot summer day.",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 5,
    name: "Mike Brown",
    occupation: "Sales Representative",
    quote:
      "The Cocoa Milk is my favorite drink. It's like a warm, chocolatey hug in a cup!",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    occupation: "Graphic Designer",
    quote:
      "The Coffee Ice Cream is so creamy and delicious. It's the perfect dessert after a long day.",
    image: "https://i.pravatar.cc/150?img=10",
  },
]
