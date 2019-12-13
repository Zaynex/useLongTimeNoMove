<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/uselongtimenomove">
    <img alt="" src="https://badgen.net/npm/zaynex/uselongtimenomove">
  </a>
  <a aria-label="Package size" href="https://bundlephobia.com/result?p=uselongtimenomove">
    <img alt="" src="https://badgen.net/bundlephobia/minzip/uselongtimenomove">
  </a>
  <a aria-label="License" href="https://github.com/zaynex/uselongtimenomove/blob/master/LICENSE">
    <img alt="" src="https://badgen.net/npm/license/uselongtimenomove">
  </a>
</p>

## Introduction

Detects if the user has not moved the mouse for a long time.

## Quick Start
```
import useLongTimeNoMove from 'uselongtimenomove';

function App() {
  const isNoMoved = useLongTimeNoMove(5000);
  if(isNoMoved) return <div>User long time no move</div>
  return <div>User moved recently</div>
}
```