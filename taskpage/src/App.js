import './App.css';
import Blogs from './components/Blogs/Blogs';
import FeaturedMedia from './components/FeatureMedia/FeatureMedia';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/Heroection';
import InfraMantra from './components/InfraMantra/InfraMantra';
import NewsList from './components/NewsList/NewsList';
import TrendingNews from './components/TrendingNews/TrendingNews';



function App() {
  return (
    <div className="App">
      <Header />
      <InfraMantra/>
    </div>
  );
}

export default App;
