import FormProduct from './FormProduct'

const Home = ({ id = '' }) => {
    return (
        <main className="bg-black flex justify-center items-center min-h-screen" >
            <div className='w-full max-w-xl min-w-0 text-black bg-white rounded-md p-5'>
                <FormProduct id={id} />
            </div>
        </main>
    )
}

export default Home