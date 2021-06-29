import React, { useRef, useState } from "react";

import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  TextField,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  buttons: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const ref = useRef<HTMLTextAreaElement>(null!);

  const encode = () => {
    setText(encodeURIComponent(text));
    ref.current.focus();
  };

  const decode = () => {
    setText(decodeURIComponent(text));
    ref.current.focus();
  };

  return (
    <Box width="100%" height="100%">
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6">URI Encoder/Decoder</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" component="main" className={classes.main}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  inputRef={ref}
                  fullWidth
                  multiline
                  rows={30}
                  variant="outlined"
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                />
              </Grid>

              <Grid item xs={12} className={classes.buttons}>
                <Button variant="contained" color="primary" onClick={encode}>
                  Encode
                </Button>

                <Button variant="contained" color="secondary" onClick={decode}>
                  Decode
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="caption" component="p">
                  "Scroll Emoji", by{" "}
                  <a href="https://twemoji.twitter.com/">Twemoji</a>, licensed
                  under{" "}
                  <a href="https://creativecommons.org/licenses/by/4.0/">
                    CC-BY 4.0.
                  </a>
                </Typography>

                <Typography
                  variant="caption"
                  color="textSecondary"
                  component="p"
                >
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default App;
