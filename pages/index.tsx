import * as React from 'react';
import type {NextPage} from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {PageTitle, PageFooter, PageLinkButton, PageContent} from "../components/widgets";
import Box from '@mui/material/Box';
import {Slide, Stack} from "@mui/material";
import {useEffect} from "react";

const Home: NextPage = () => {
    let elem: any = null;
    let battleShipElem: any = null;
    let planetElem: any = null;
    const containerRef = React.useRef(null);

    useEffect(() => {
        elem = document.querySelector(".main-container");
        battleShipElem = document.querySelector(".battle-ship");
        planetElem = document.querySelector(".planet");
        document.addEventListener("mousemove", parallax);
    });

    const parallax = (e: any) => {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        //let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        if (elem != null) {
            elem.style.backgroundPosition = _depth1;
        }
        if (battleShipElem != null) {
            battleShipElem.style.backgroundPosition = _depth3;
        }
        if (planetElem != null) {
            planetElem.style.backgroundPosition = _depth3;
        }
    }

    return (
        <Container maxWidth={"xl"} ref={containerRef}>
            <Box component={"div"} sx={{height: "100vh", position: "relative"}}>
                <PageTitle component={"div"}>
                    <Typography variant={"subtitle1"} component={"span"}>Test Text</Typography>
                </PageTitle>
                <PageContent component={"div"}>
                    <Box component={"div"}>
                        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
                            <Slide direction="right" in={true} container={containerRef.current} timeout={1000}>
                                <Box component={"div"} className={'battle-ship'}/>
                            </Slide>
                            <Slide direction="left" in={true} container={containerRef.current} timeout={1000}>
                                <Box component={"div"} className={'planet'}/>
                            </Slide>
                        </Stack>
                    </Box>
                </PageContent>
                <PageFooter component={"div"}>
                    <Box component={"div"}>
                        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
                            <PageLinkButton href="https://google.com" underline={"none"} target={"_blank"}>
                                <Typography variant={"subtitle1"} component={"span"}>Mouse Hover link</Typography>
                            </PageLinkButton>
                            <PageLinkButton href="https://google.com" underline={"none"} target={"_blank"}>
                                <Typography variant={"subtitle1"} component={"span"}>Mouse Hover link</Typography>
                            </PageLinkButton>
                        </Stack>
                    </Box>
                </PageFooter>
            </Box>
        </Container>
    );
}

export default Home
