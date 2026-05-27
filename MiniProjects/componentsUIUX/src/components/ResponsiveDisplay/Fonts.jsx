import React from "react";

export default function Fonts() {
  return (
    <div>
      <h3>Fonts</h3>
      <p>
        this page uses many responsive font sizes, for h1 to h5, paragraphs and
        more
      </p>
      <p>
        using clamp(min, pre, max) you can make you page feel smoth using less
        css
      </p>
      <p>
        pre - variable unit will ve in *vw*, this means, if you want your font
        to be 50px in a 1920px page you will using the calc: 50/1920*100 = 2.6..
      </p>
      <p>
        There is a really cool web site to cal the right vw -
        https://modern-fluid-typography.vercel.app/
      </p>
    </div>
  );
}
