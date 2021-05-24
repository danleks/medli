import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import { FooterStyles, FooterWrapperStyles, InnerWrapperStyles, FormTitleStyles, FormStyles, FooterSectionStyles,FooterSectionTitleStyles, FooterSectionWrapperStyles, FooterSectionItemStyles, LinkStyles, LinkTermsStyles } from './Footer.styles';

const Footer = () => {
    return (
        <FooterStyles>
            <FooterWrapperStyles>
                <InnerWrapperStyles>
                    <Logo color='white' />
                </InnerWrapperStyles>
                <InnerWrapperStyles>
                    <FormTitleStyles>Try Medli for free</FormTitleStyles>
                    <FormStyles>
                        <Input placeholder='Enter your email' type='email' required/>
                        <Button type='button' style='submit'>Get started</Button>
                    </FormStyles>
                </InnerWrapperStyles>
                <InnerWrapperStyles>
                    <FooterSectionStyles>
                        <FooterSectionTitleStyles>Product</FooterSectionTitleStyles>
                        <FooterSectionWrapperStyles>
                            <FooterSectionItemStyles>
                                <LinkStyles to='#'>
                                    Updates
                                </LinkStyles>
                            </FooterSectionItemStyles>
                            <FooterSectionItemStyles>
                                <LinkStyles to='#'>
                                    Security
                                </LinkStyles>
                            </FooterSectionItemStyles>
                            <FooterSectionItemStyles>
                                <LinkStyles to='#'>
                                    Chrome Extension
                                </LinkStyles>
                            </FooterSectionItemStyles>
                        </FooterSectionWrapperStyles>
                    </FooterSectionStyles>
                    <FooterSectionStyles>
                        <FooterSectionTitleStyles>Company</FooterSectionTitleStyles>
                        <FooterSectionWrapperStyles>
                            <FooterSectionItemStyles>
                                <LinkStyles to='#'>
                                    About
                                </LinkStyles>
                            </FooterSectionItemStyles>
                            <FooterSectionItemStyles>
                                <LinkStyles to='#'>
                                    Blog
                                </LinkStyles>
                            </FooterSectionItemStyles>
                            <FooterSectionItemStyles>
                                <LinkStyles to='#'>
                                Join Us
                                </LinkStyles>
                            </FooterSectionItemStyles>
                        </FooterSectionWrapperStyles>
                    </FooterSectionStyles>
                    <FooterSectionStyles>
                        <FooterSectionTitleStyles>Help</FooterSectionTitleStyles>
                        <FooterSectionWrapperStyles>
                            <FooterSectionItemStyles>
                                <LinkStyles to='#'>
                                    Talk to Support
                                </LinkStyles>
                            </FooterSectionItemStyles>
                            <FooterSectionItemStyles>
                                <LinkStyles to='#'>
                                    Support Docs
                                </LinkStyles>
                            </FooterSectionItemStyles>
                            <FooterSectionItemStyles>
                                <LinkStyles to='#'>
                                    API Docs
                                </LinkStyles>
                            </FooterSectionItemStyles>
                            <FooterSectionItemStyles>
                                <LinkStyles to='#'>
                                    System Status
                                </LinkStyles>
                            </FooterSectionItemStyles>
                        </FooterSectionWrapperStyles>
                    </FooterSectionStyles>
                </InnerWrapperStyles>
                <InnerWrapperStyles>
                    <LinkTermsStyles to='#'>Terms & Conditions</LinkTermsStyles>
                </InnerWrapperStyles>
            </FooterWrapperStyles>
        </FooterStyles>
    )
}

export default Footer;
