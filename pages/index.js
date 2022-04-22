import Head from 'next/head';

import { loadStripe } from '@stripe/stripe-js';

import { Box, Center, Heading, Text } from '@chakra-ui/react'
import ProductCard from "../components/products/ProductCard/ProductCard";


export default function Home(props) {

	const products = props.products;

	const stripePromies = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    );

	return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
                <title>GPU Guru Storefront</title>
            </Head>
            <Box position="relative">
                <Center flexDirection="column" pb="5rem">
                    <Heading
                        as="h1"
                        size="2xl"
                        color="gray.600"
                        margin="2rem 0"
                    >
                        Welcome to GPU Guru
                    </Heading>
                    <Center gap="2rem" flexWrap="wrap" maxW="80%">
                        {products.length >= 3 ? products.map((product) => (
                            <ProductCard key={product.uid} product={product} />
                        )) : null}
                    </Center>
                </Center>
                <Center
                    padding="1rem"
                    borderTop="1px solid lightgrey"
                    bgColor="gray.600"
                    position="fixed"
                    bottom="0"
                    width="100%"
                >
                    <Text color="white">Copyright &copy; GPU Guru 2022</Text>
                </Center>
            </Box>
        </>
    );
}

export async function getStaticProps(){
	
	const res = await fetch('https://storefront-dashboard-21366-default-rtdb.firebaseio.com/products.json');
	const productData = await res.json();
	const products = Object.values(productData);

	return {
        props: { 
			products
		},
		revalidate: 60
    };
}