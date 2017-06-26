# Spike - Sugarfree Template

[![tests](http://img.shields.io/travis/static-dev/spike-tpl-base/master.svg?style=flat)](https://travis-ci.org/spike-tpl-base/spike-tpl-base) [![dependencies](http://david-dm.org/static-dev/spike-tpl-base.svg?path=root)](https://david-dm.org/static-dev/spike-tpl-base?path=root)

My base template for [spike](https://github.com/static-dev/spike), but without sugarml or sugarss. The features in this template are designed by the [carrot](https://github.com/carrot) tech team, and modified by me.

## Installation

### With Spike

- `npm i spike -g`
- `spike tpl add colsen1991-sugarfree https://github.com/colsen1991/spike-tpl-sugarfree`
- `spike new <projectname> -t colsen1991-sugarfree`

...or you can make it the default with `spike tpl default colsen1991-sugarfree`.

### Standalone

[Spike](https://github.com/static-dev/spike) uses [sprout](https://github.com/carrot/sprout) internally to generate it's project templates. This means you can even use this template without [spike](https://github.com/static-dev/spike) by using [sprout](https://github.com/carrot/sprout) directly.

- `npm i sprout-cli -g`
- `sprout add colsen1991-spike-tpl-sugarfree git@github.com:colsen1991/spike-tpl-sugarfree.git`
- `sprout new colsen1991-spike-tpl-sugarfree <myproject>`

## Options

- **name** (name of template)
- **description** (a short description of the template)
- **github_username** (name of github user)
