import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {Link} from "@mui/material";

export const PageTitle = styled(Box)(({theme}) => ({
    position: "absolute",
    width: "100%",
    height: "160px",
    zIndex: 1000,
    left: 0,
    top: "80px",
    background: "rgba(128, 128, 128, 0.7)",
    clipPath: "polygon(40px 0%, 100% 0%, 100% 120px, calc(100% - 40px) 100%, 0% 100%, 0% 40px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    '& .MuiTypography-subtitle1': {
        color: 'white',
        fontSize: "96px",
    },
    [theme.breakpoints.down("md")]: {
        '& .MuiTypography-subtitle1': {
            fontSize: "60px",
        },
    }
}));

export const PageContent = styled(Box)({
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    '& .MuiBox-root': {
        width: "100%",
    },
})

export const PageFooter = styled(Box)({
    position: "absolute",
    height: "160px",
    zIndex: 1000,
    left: 0,
    right: 0,
    bottom: "50px",
    '& .MuiBox-root': {
        width: "100%",
    },
});

export const PageLinkButton = styled(Link)(({theme}) => ({
    maxWidth: "521px",
    width: "100%",
    height: "160px",
    background: "rgba(128, 128, 128, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    clipPath: "polygon(40px 0%, 100% 0%, 100% 120px, calc(100% - 40px) 100%, 0% 100%, 0% 40px)",

    '& .MuiTypography-subtitle1': {
        color: 'white',
        fontSize: "36px",
        fontWeight: "bold",
        textTransform: "capitalize",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        WebkitTextStrokeWidth: '1px',

        WebkitTextStrokeColor: "#000000",
    },
    '&:hover': {
        backgroundColor: "rgba(60, 60, 60, 0.7)",
    },
    [theme.breakpoints.down("md")]: {
        '& .MuiTypography-subtitle1': {
            fontSize: "24px",
        },
    }

}));