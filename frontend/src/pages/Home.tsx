import Button from "../components/Button"
import Container from "../components/Container"
import ProductCard from "../components/ProductCard"
import SectionTitle from "../components/SectionTitle"
import  WomanShop  from "../assets/woman-shop.jpg"
import  WomanWithGlasses  from "../assets/woman-infront-building.jpg"
import  WomanSmilling  from "../assets/brunette-haired-woman-smiling.jpg"
import { Link } from "react-router-dom"
import CategoryCard from "../components/CategoryCard"

const  Home = () => {
  return (
    <>
    {/* Product Section */}
      <Container>
        <div className="flex flex-col py-10 gap-18">
          <SectionTitle>Featured Products</SectionTitle>
          <div className="w-full max-w-8xl flex flex-wrap gap-12 justify-center ">
            <ProductCard 
              imageUrl={WomanShop}
              alt={""} 
              productName={"My Product"}
              categoryName={"Electronics"}
              price={44.9}
            />

            <ProductCard 
              imageUrl={WomanWithGlasses}
              alt={""} 
              productName={"Sun glasses"}
              categoryName={"Fashion"}
              price={49.5}
            />

            <ProductCard 
              imageUrl={WomanShop}
              alt={""} 
              productName={"Nice Jackets"}
              categoryName={"Out fits"}
              price={119.0}
            />

            <ProductCard 
              imageUrl={WomanSmilling}
              alt={""} 
              productName={"Good Bags"}
              categoryName={"Fashion"}
              price={59.9}
            />
          </div>

          <div className="flex justify-center items-center">
            <Link to={'/product'}>
              <Button className="border border-secondary-color text-secondary-color hover:border-primary-color hover:text-primary-color">View more</Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* Categories Section */}
      <Container>
        <div className="flex flex-col py-10 gap-18">
          <SectionTitle>Popular Categories</SectionTitle>
          <div className="w-full max-w-8xl flex flex-wrap gap-12 justify-center ">
            <CategoryCard
            imageUrl = {WomanSmilling}
            alt = {''}
            categoryName = {'Electronics'}
            />
            <CategoryCard
            imageUrl = {WomanShop}
            alt = {''}
            categoryName = {'Fashion'}
            />
            <CategoryCard
            imageUrl = {WomanSmilling}
            alt = {''}
            categoryName = {'Home Appliance'}
            />
            <CategoryCard
            imageUrl = {WomanSmilling}
            alt = {''}
            categoryName = {'Gaming'}
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
