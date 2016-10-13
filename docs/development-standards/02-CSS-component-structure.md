## CSS Component Structure

In general, the idea is to break an app down into reusable abstracted, style independent structural _objects_ and named implementation-specific or styled ui _components_. Any of which can have _variants_ and _utilities_ applied.

The current landscape offers a vast amount of opinions and options for architecting components. For this library we use:

* [BEM (Block, Element, Modifier)](http://getbem.com/introduction/) combined with:
* [ITCSS](http://csswizardry.net/talks/2014/11/itcss-dafed.pdf) and folded into:
* [BEMIT Naming](http://www.jamesturneronline.net/blog/bemit-naming-convention.html) (read more on [using namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/) and [immutable css](http://csswizardry.com/2015/03/immutable-css/) ) with a healthy sprinkling of:
* RAL LOVE

## Examples

BEM "Two Dashes style"
`block-name__elem-name--mod-name`
* Names are written in lower case.
* Words within the names of BEM entities are separated by a hyphen (-).
* An element name is separated from a block name by a double underscore (__).
* Boolean modifiers are delimited by double hyphens (--).
* Key-value type modifiers are not used.

