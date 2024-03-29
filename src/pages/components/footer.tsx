import * as React from "react";
import { ReactNode } from 'react';

import {
    Box, chakra, Container, Link, SimpleGrid, Stack, Text, useColorModeValue, VisuallyHidden
} from '@chakra-ui/react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';


const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            onClick={() => {
                if (typeof window !== "undefined") {
                    const w = window as any;
                    w.jitsu('track', 'Social Clicked', { site: { label } })
                }
            }}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }
            }>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button >
    );
};

const TrackedLink = ({ site, href, label }:
    {
        site: string;
        href: string;
        label: string;
    }) => {
    return (
        <Link onClick={() => {
            if (typeof window !== "undefined") {
                const w = window as any;
                w.jitsu('track', 'Link Clicked', { site: site })
            }
        }}
            href={href}>{label}
        </Link>
    )
}

export default function LargeWithAppLinksAndSocial() {
    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <ListHeader>Resources</ListHeader>
                        <TrackedLink site={'substack'} href={'https://pedram.substack.com'} label={"Pedram's Substack"} />
                        <TrackedLink site={'calendar'} href={'https://app.reclaim.ai/m/pedramnavid'} label={"Book Time with Me"} />
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Social Media</ListHeader>
                        <TrackedLink site={'twitter'} href={'https://twitter.com/pdrmnvd'} label={"Twitter"} />
                        <TrackedLink site={'linkedin'} href={'https://linkedin.com/in/pedramnavid'} label={"LinkedIn"} />
                    </Stack>


                </SimpleGrid>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ md: 'space-between' }}
                    align={{ md: 'center' }}>
                    <Text>© 2022 West Marin Data LLC. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} href={'https://twitter.com/pdrmnvd'}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'LinkedIn'} href={'https://linkedin.com/in/pedramnavid'}>
                            <FaLinkedin />
                        </SocialButton>
                        <SocialButton label={'Work With Me'} href={'https://www.meetupside.com/public/pedram-navid'}>
                            <FaLinkedin />
                        </SocialButton>

                    </Stack>
                </Container>
            </Box>
        </Box >
    );
}
