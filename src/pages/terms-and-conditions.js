import React from 'react';
import { Container, Typography, Box, Stack } from '@mui/material';

const TermsOfService = () => {
    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Terms of Service
                </Typography>
                <Stack variant="body1" gutterBottom>
                    <strong>Effective Date: 23/07/2024</strong>
                    <Stack sx={{ mt: "15px" }}>
                        <p><strong>Introduction</strong></p>
                        <p>These Terms of Service (&quot;Terms&quot;) govern your use of the services provided by Polar AI (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using our services, you agree to be bound by these Terms.</p>
                    </Stack>
                    <Stack sx={{ mt: "15px" }}>
                        <p><strong>Use of Services</strong></p>
                        <p><strong>Eligibility</strong></p>
                        <p>You must be at least 18 years old to use our services.</p>
                        <p><strong>Account Registration</strong></p>
                        <p>You may need to create an account to access certain features. You are responsible for maintaining the confidentiality of your account information.</p>
                        <p><strong>Prohibited Activities</strong></p>
                        <p>You agree not to engage in any activity that is illegal, harmful, or violates the rights of others while using our services.</p>
                    </Stack>
                    <Stack sx={{ mt: "15px" }}>
                        <p><strong>Intellectual Property</strong></p>
                        <p><strong>Ownership</strong></p>
                        <p>All content, trademarks, and intellectual property related to our services are owned by Polar AI or our licensors.</p>
                        <p><strong>Limited License</strong></p>
                        <p>We grant you a limited, non-exclusive, non-transferable license to use our services for personal or internal business purposes.</p>
                    </Stack>
                    <Stack sx={{ mt: "15px" }}>
                        <p><strong>Disclaimers and Limitation of Liability</strong></p>
                        <p><strong>Disclaimers</strong></p>
                        <p>Our services are provided &quot;as is&quot; and &quot;as available.&quot; We disclaim all warranties, express or implied, including those of merchantability, fitness for a particular purpose, and non-infringement.</p>
                        <p><strong>Limitation of Liability</strong></p>
                        <p>To the maximum extent permitted by law, Polar AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (i) your use or inability to use our services; (ii) any unauthorized access to or use of our servers and/or any personal information stored therein.</p>
                    </Stack>
                    <Stack sx={{ mt: "15px" }}>
                        <p><strong>Governing Law</strong></p>
                        <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.</p>
                    </Stack>
                    <Stack sx={{ mt: "15px" }}>
                        <p><strong>Changes to These Terms</strong></p>
                        <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on our website. Your continued use of our services after such changes constitute your acceptance of the new Terms.</p>
                    </Stack>
                    <Stack sx={{ mt: "15px" }}>
                        <p><strong>Contact Us</strong></p>
                        <p>If you have any questions about these Terms, please contact us at hello@gopolar.io.</p>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    );
};

export default TermsOfService;
