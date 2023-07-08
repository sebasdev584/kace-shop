import FormProduct from './FormProduct'

const Home = ({ id = '' }) => {
    return (

        <div className='w-full max-w-xl min-w-0 text-black bg-white rounded-md p-5'>
            <FormProduct id={id} />
        </div>
    )
}

export default Home