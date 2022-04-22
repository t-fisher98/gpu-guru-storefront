import React from 'react'

import Card from 'components/card/Card'
import { 
	Box,
	Text,
	Flex,
	Button
} from '@chakra-ui/react'
import Image from 'next/image'

function ProductCard({product}) {

	const {productName, productPrice, imageUrl, productDescription, uid} = {...product};

	return (
        <Card height="34rem" position="relative">
            <Box borderBottom="1px solid lightgrey" padding="1rem">
                <Flex justifyContent="end">
                    <Text fontSize="2rem" color="grey">
                        ${productPrice}
                    </Text>
                </Flex>
                <Image src={imageUrl} alt={productName.value} width='480' height='500'/>
            </Box>
            <Flex flexDirection="column" padding="1rem">
                <Text fontSize="1.5rem">{productName}</Text>
                <Text lineHeight="1.25">{productDescription}</Text>
            </Flex>
            <Flex position="absolute" right="1rem" bottom="1rem">
                <form method="POST" action='/api/checkout'>
                    <input type="hidden" name="uid" value={uid} />
                    <Button
                        type="submit"
                        bgColor="gray.600"
                        color="white"
                        _hover={{ bg: "blue.500" }}
                    >
                        Buy Now
                    </Button>
                </form>
            </Flex>
        </Card>
    );
}

export default ProductCard