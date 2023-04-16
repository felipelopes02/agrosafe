import CustomDay from '../../components/date'
import DateCalendarViews from '../../components/date'
import ResponsiveAppBar from '../../components/navbar'
import DataGridDemo from '../../components/sobre'



import './home.css'

const Home = () => {
    return(
        <div className='home'>
            <ResponsiveAppBar/>
            <DataGridDemo/>
            <CustomDay />
            
        </div>
    )
}

export default Home