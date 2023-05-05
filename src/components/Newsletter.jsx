import Button from "./utils/Button"
import Container from "./utils/Container"

export default function Newsletter() {
  return (
    <Container>
      <div className='h-[400px] w-full rounded-xl bg-[url("https://images.unsplash.com/photo-1551887196-72e32bfc7bf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80")] bg-cover bg-center bg-no-repeat'>
        <div className='flex h-full flex-col items-center justify-center space-y-5 p-5 text-neutral-50'>
          <h3 className='text-center text-2xl lg:text-3xl'>
            Subscribe to our Newsletter & Get 30% discount
          </h3>
          <div className='relative w-full lg:w-[500px]'>
            <input
              type='email'
              className='block w-full rounded-full border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 '
              placeholder='Email Address'
              required
            />

            <div className='absolute bottom-[3px] right-[5px]'>
              <Button text={"Order Now"} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
