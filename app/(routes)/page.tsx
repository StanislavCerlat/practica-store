import Container from "@/components/ui/container";
import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({})
    const billboard = await getBillboard('670a5956-0082-4150-af77-709bd46694aa');
    return (
        
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="All Products" items={products} />
            </div>
            </div>
        </Container>
    );
}

export default HomePage;