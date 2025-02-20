import ReviewList from "../components/ReviewList"
import AddReviewBox from "../components/AddEditReviewBox"
import "../css/HomePage.css"

function HomePage() {

    return (
        <div className="homepage-container">
            <ReviewList />
            <AddReviewBox />
        </div>
    )
  }
  
  export default HomePage
  