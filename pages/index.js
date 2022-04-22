
//https://storefront-dashboard-21366-default-rtdb.firebaseio.com/products.json

import { Box, Center, Heading, Text } from '@chakra-ui/react'

import ProductCard from "../components/products/ProductCard/ProductCard";

export default function Home(props) {

	const products = props.products;

	return (
        <Box position='relative'>
            <Center flexDirection="column" pb="5rem">
                <Heading as="h1" size="2xl" color="gray.600" margin="2rem 0">
                    Welcome to GPU Guru
                </Heading>
                <Center gap="2rem" flexWrap="wrap">
                    {products.map((product) => (
                        <ProductCard key={product.uid} product={product} />
                    ))}
                </Center>
            </Center>
            <Center
				padding='1rem'
                borderTop="1px solid lightgrey"
                bgColor="gray.600"
				position='fixed'
				bottom='0'
				width='100%'
            >
                <Text color="white">Copyright &copy; GPU Guru 2022</Text>
            </Center>
        </Box>
    );
}

export async function getStaticProps(){
	
	const res = await fetch('https://storefront-dashboard-21366-default-rtdb.firebaseio.com/products.json');
	const productData = await res.json();
	const products = Object.values(productData);

	console.log(products)

	return {
        props: { 
			products
		}
    };
}