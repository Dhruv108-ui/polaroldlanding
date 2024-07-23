import React from 'react';
import { Container, Typography, Box, Stack } from '@mui/material';

const PrivacyPolicy = () => {
    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Privacy Policy
                </Typography>
                <Stack>
                    <Stack sx={{ mt: "15px" }}>
                        <strong>Introduction</strong>
                        <p>Polar AI ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services. By accessing or using our services, you agree to the terms of this Privacy Policy.</p>
                    </Stack>
                    <Stack sx={{ mt: "15px" }}>
                        <strong>Information We Collect</strong>
                        <p><strong>Personal Information</strong></p>
                        <p>When you register or interact with our services, we may collect personal information such as your name, email address, phone number, and payment information.</p>
                        <p><strong>Usage Data</strong></p>
                        <p>We collect information about your interactions with our services, including the pages you visit, the time spent on those pages, and other usage statistics.</p>
                        <p><strong>Cookies and Tracking Technologies</strong></p>
                        <p>We use cookies and similar tracking technologies to enhance your experience on our website, gather usage data, and improve our services.</p>
                    </Stack>
                    <Stack sx={{ mt: "15px" }}>
                        <strong>How We Use Your Information</strong>
                        <p><strong>To Provide and Maintain Our Services</strong></p>
                        <p>We use your information to deliver the services you have requested, including processing transactions and providing customer support.</p>
                        <p><strong>To Improve Our Services</strong></p>
                        <p>We analyze usage data to understand how our services are used and to make improvements.</p>
                        <p><strong>To Communicate With You</strong></p>
                        <p>We may use your contact information to send you updates, marketing materials, and other information related to our services.</p>
                        <p><strong>To Ensure Security</strong></p>
                        <p>We use your information to detect and prevent fraud, abuse, and other harmful activities.</p>
                    </Stack>
                    <Stack sx={{ mt: "15px" }}>
                        <strong>How We Share Your Information</strong>
                        <p><strong>With Service Providers</strong></p>
                        <p>We may share your information with third-party service providers who assist us in operating our business and providing our services.</p>
                        <p><strong>For Legal Reasons</strong></p>
                        <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities.</p>
                        <p><strong>Business Transfers</strong></p>
                        <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner.</p>
                    </Stack>
                    <Stack sx={{ mt: "15px" }}>
                        <strong>Your Privacy Rights</strong>
                        <p><strong>Access and Correction</strong></p>
                        <p>You have the right to access and correct your personal information held by us.</p>
                        <p><strong>Opt-Out</strong></p>
                        <p>You can opt out of receiving marketing communications from us at any time.</p>
                        <p><strong>Data Deletion</strong></p>
                        <p>You may request the deletion of your personal information, subject to certain legal obligations.</p>
                    </Stack>
                    <Stack sx={{ mt: "15px" }}>
                        <strong>Contact Us</strong>
                        <p>If you have any questions or concerns about this Privacy Policy, please contact us at hello@gopolar.io.</p>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    );
};

export default PrivacyPolicy;
