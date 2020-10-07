Ext.data.JsonP.Layer({"tagname":"class","name":"Layer","autodetected":{},"files":[{"filename":"drawing.js","href":"drawing.html#Layer"}],"params":[{"tagname":"params","type":"Object","name":"options","optional":true,"doc":"<p>A set of options.</p>\n","properties":[{"tagname":"params","type":"Number","name":"x","default":"0","optional":true,"doc":"<p>The x-coordinate of the top-left corner of the Layer.</p>\n","html_type":"<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>"},{"tagname":"params","type":"Number","name":"y","default":"0","optional":true,"doc":"<p>The y-coordinate of the top-left corner of the Layer.</p>\n","html_type":"<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>"},{"tagname":"params","type":"Number","name":"width","optional":true,"doc":"<p>The width of the Layer.</p>\n","html_type":"<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>"},{"tagname":"params","type":"Number","name":"height","optional":true,"doc":"<p>The height of the Layer.</p>\n","html_type":"<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>"},{"tagname":"params","type":"\"world\"/\"canvas\"","name":"relative","default":"\"world\"","optional":true,"doc":"<p>Indicates what to draw the Layer relative to:</p>\n\n<ul>\n<li>'world': Draw the layer relative to the world so that it will appear\nto be in one specific place as the player or viewport moves.</li>\n<li>'canvas': Draw the layer relative to the canvas so that it stays fixed\nas the player moves. This is useful for a HUD, for example.</li>\n</ul>\n\n\n<p>  This option is irrelevant if the world is the same size as the canvas.</p>\n","html_type":"\"world\"/\"canvas\""},{"tagname":"params","type":"Number","name":"opacity","default":"1","optional":true,"doc":"<p>A fractional percentage [0, 1] indicating the opacity of the Layer.\n  0 (zero) means fully transparent; 1 means fully opaque. This value is\n  applied when <a href=\"#!/api/Layer-method-draw\" rel=\"Layer-method-draw\" class=\"docClass\">drawing</a> the layer.</p>\n","html_type":"<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>"},{"tagname":"params","type":"Number","name":"parallax","default":"1","optional":true,"doc":"<p>A fractional percentage indicating how much to <a href=\"#!/api/Layer-method-scroll\" rel=\"Layer-method-scroll\" class=\"docClass\">scroll</a>\n  the Layer relative to the viewport's movement.</p>\n","html_type":"<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>"},{"tagname":"params","type":"Mixed","name":"src","optional":true,"doc":"<p>Anything that can be passed to the <code>src</code> parameter of\n  <a href=\"#!/api/CanvasRenderingContext2D-method-drawImage\" rel=\"CanvasRenderingContext2D-method-drawImage\" class=\"docClass\">drawImage()</a>. This will be used\n  to draw an image stretched over the whole Layer as a convenience.</p>\n","html_type":"Mixed"},{"tagname":"params","type":"HTMLElement","name":"canvas","optional":true,"doc":"<p>A Canvas element in which to hold the Layer. If not specified, a new,\n  invisible canvas is created. Careful; if width and height are specified,\n  the canvas will be resized (and therefore cleared). This is mainly for\n  internal use.</p>\n","html_type":"HTMLElement"}],"html_type":"Object"}],"members":[{"name":"canvas","tagname":"property","owner":"Layer","id":"property-canvas","meta":{"readonly":true}},{"name":"context","tagname":"property","owner":"Layer","id":"property-context","meta":{"readonly":true}},{"name":"height","tagname":"property","owner":"Layer","id":"property-height","meta":{"readonly":true}},{"name":"opacity","tagname":"property","owner":"Layer","id":"property-opacity","meta":{}},{"name":"parallax","tagname":"property","owner":"Layer","id":"property-parallax","meta":{}},{"name":"relative","tagname":"property","owner":"Layer","id":"property-relative","meta":{}},{"name":"width","tagname":"property","owner":"Layer","id":"property-width","meta":{"readonly":true}},{"name":"x","tagname":"property","owner":"Layer","id":"property-x","meta":{}},{"name":"xOffset","tagname":"property","owner":"Layer","id":"property-xOffset","meta":{}},{"name":"y","tagname":"property","owner":"Layer","id":"property-y","meta":{}},{"name":"yOffset","tagname":"property","owner":"Layer","id":"property-yOffset","meta":{}},{"name":"clear","tagname":"method","owner":"Layer","id":"method-clear","meta":{"chainable":true}},{"name":"draw","tagname":"method","owner":"Layer","id":"method-draw","meta":{"chainable":true}},{"name":"positionOverCanvas","tagname":"method","owner":"Layer","id":"method-positionOverCanvas","meta":{}},{"name":"scroll","tagname":"method","owner":"Layer","id":"method-scroll","meta":{"chainable":true}},{"name":"showCanvasOverlay","tagname":"method","owner":"Layer","id":"method-showCanvasOverlay","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Layer","short_doc":"The Layer object (basically a new, utility canvas). ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/drawing.html#Layer' target='_blank'>drawing.js</a></div></pre><div class='doc-contents'><p>The Layer object (basically a new, utility canvas).</p>\n\n<p>Layers allow efficient rendering of complex scenes by acting as caches for\nparts of the scene that are grouped together. For example, it is recommended\nto create a Layer for your canvas's background so that you can render the\nbackground once and then draw the completely rendered background onto the\nmain canvas in each frame instead of re-computing the background for each\nframe. This can significantly speed up animation.</p>\n\n<p>In general you should create a layer for any significant grouping of items\nif that grouping moves together when animated. It is more memory-efficient\nto specify a smaller layer size if possible; otherwise the layer will\ndefault to the size of the whole canvas.</p>\n\n<p>Draw onto a Layer by using its \"context\" property, which is a\n<a href=\"#!/api/CanvasRenderingContext2D\" rel=\"CanvasRenderingContext2D\" class=\"docClass\">canvas graphics context</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>A set of options.</p>\n<ul><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The x-coordinate of the top-left corner of the Layer.</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The y-coordinate of the top-left corner of the Layer.</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>width</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The width of the Layer.</p>\n</div></li><li><span class='pre'>height</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The height of the Layer.</p>\n</div></li><li><span class='pre'>relative</span> : \"world\"/\"canvas\" (optional)<div class='sub-desc'><p>Indicates what to draw the Layer relative to:</p>\n\n<ul>\n<li>'world': Draw the layer relative to the world so that it will appear\nto be in one specific place as the player or viewport moves.</li>\n<li>'canvas': Draw the layer relative to the canvas so that it stays fixed\nas the player moves. This is useful for a HUD, for example.</li>\n</ul>\n\n\n<p>  This option is irrelevant if the world is the same size as the canvas.</p>\n<p>Defaults to: <code>&quot;world&quot;</code></p></div></li><li><span class='pre'>opacity</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>A fractional percentage [0, 1] indicating the opacity of the Layer.\n  0 (zero) means fully transparent; 1 means fully opaque. This value is\n  applied when <a href=\"#!/api/Layer-method-draw\" rel=\"Layer-method-draw\" class=\"docClass\">drawing</a> the layer.</p>\n<p>Defaults to: <code>1</code></p></div></li><li><span class='pre'>parallax</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>A fractional percentage indicating how much to <a href=\"#!/api/Layer-method-scroll\" rel=\"Layer-method-scroll\" class=\"docClass\">scroll</a>\n  the Layer relative to the viewport's movement.</p>\n<p>Defaults to: <code>1</code></p></div></li><li><span class='pre'>src</span> : Mixed (optional)<div class='sub-desc'><p>Anything that can be passed to the <code>src</code> parameter of\n  <a href=\"#!/api/CanvasRenderingContext2D-method-drawImage\" rel=\"CanvasRenderingContext2D-method-drawImage\" class=\"docClass\">drawImage()</a>. This will be used\n  to draw an image stretched over the whole Layer as a convenience.</p>\n</div></li><li><span class='pre'>canvas</span> : HTMLElement (optional)<div class='sub-desc'><p>A Canvas element in which to hold the Layer. If not specified, a new,\n  invisible canvas is created. Careful; if width and height are specified,\n  the canvas will be resized (and therefore cleared). This is mainly for\n  internal use.</p>\n</div></li></ul></div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-canvas' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/drawing.html#Layer-property-canvas' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-canvas' class='name expandable'>canvas</a> : HTMLElement<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>The canvas backing the Layer.</p>\n</div><div class='long'><p>The canvas backing the Layer.</p>\n</div></div></div><div id='property-context' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/drawing.html#Layer-property-context' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-context' class='name expandable'>context</a> : <a href=\"#!/api/CanvasRenderingContext2D\" rel=\"CanvasRenderingContext2D\" class=\"docClass\">CanvasRenderingContext2D</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>The Layer's graphics context. ...</div><div class='long'><p>The Layer's graphics context. Use this to draw onto the Layer.</p>\n</div></div></div><div id='property-height' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/drawing.html#Layer-property-height' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-height' class='name expandable'>height</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>The height of the Layer.</p>\n</div><div class='long'><p>The height of the Layer.</p>\n</div></div></div><div id='property-opacity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/drawing.html#Layer-property-opacity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-opacity' class='name expandable'>opacity</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>A fractional percentage [0, 1] indicating the opacity of the Layer. ...</div><div class='long'><p>A fractional percentage [0, 1] indicating the opacity of the Layer.\n  0 (zero) means fully transparent; 1 means fully opaque. This value is\n  applied when <a href=\"#!/api/Layer-method-draw\" rel=\"Layer-method-draw\" class=\"docClass\">drawing</a> the layer.</p>\n</div></div></div><div id='property-parallax' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/drawing.html#Layer-property-parallax' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-parallax' class='name expandable'>parallax</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>A fractional percentage indicating how much to\n  <a href=\"#!/api/Layer-method-scroll\" rel=\"Layer-method-scroll\" class=\"docClass\">scroll</a> the Layer relative to the viewport's\n  movement.</p>\n</div><div class='long'><p>A fractional percentage indicating how much to\n  <a href=\"#!/api/Layer-method-scroll\" rel=\"Layer-method-scroll\" class=\"docClass\">scroll</a> the Layer relative to the viewport's\n  movement.</p>\n</div></div></div><div id='property-relative' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/drawing.html#Layer-property-relative' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-relative' class='name expandable'>relative</a> : \"world\"/\"canvas\"<span class=\"signature\"></span></div><div class='description'><div class='short'><p>What to draw the Layer relative to.</p>\n</div><div class='long'><p>What to draw the Layer relative to.</p>\n</div></div></div><div id='property-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/drawing.html#Layer-property-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-width' class='name expandable'>width</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>The width of the Layer.</p>\n</div><div class='long'><p>The width of the Layer.</p>\n</div></div></div><div id='property-x' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/drawing.html#Layer-property-x' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-x' class='name expandable'>x</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>The x-coordinate on the <a href=\"#!/api/global-property-canvas\" rel=\"global-property-canvas\" class=\"docClass\">global canvas</a> of the\n  upper-left corner of the Layer.</p>\n</div><div class='long'><p>The x-coordinate on the <a href=\"#!/api/global-property-canvas\" rel=\"global-property-canvas\" class=\"docClass\">global canvas</a> of the\n  upper-left corner of the Layer.</p>\n</div></div></div><div id='property-xOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/drawing.html#Layer-property-xOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-xOffset' class='name expandable'>xOffset</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The horizontal distance in pixels that the Layer has\n  scrolled. ...</div><div class='long'><p>The horizontal distance in pixels that the Layer has\n  <a href=\"#!/api/Layer-method-scroll\" rel=\"Layer-method-scroll\" class=\"docClass\">scrolled</a>.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-y' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/drawing.html#Layer-property-y' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-y' class='name expandable'>y</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>The y-coordinate on the <a href=\"#!/api/global-property-canvas\" rel=\"global-property-canvas\" class=\"docClass\">global canvas</a> of the\n  upper-left corner of the Layer.</p>\n</div><div class='long'><p>The y-coordinate on the <a href=\"#!/api/global-property-canvas\" rel=\"global-property-canvas\" class=\"docClass\">global canvas</a> of the\n  upper-left corner of the Layer.</p>\n</div></div></div><div id='property-yOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/drawing.html#Layer-property-yOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-yOffset' class='name expandable'>yOffset</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The vertical distance in pixels that the Layer has\n  scrolled. ...</div><div class='long'><p>The vertical distance in pixels that the Layer has\n  <a href=\"#!/api/Layer-method-scroll\" rel=\"Layer-method-scroll\" class=\"docClass\">scrolled</a>.</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clear' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/drawing.html#Layer-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-method-clear' class='name expandable'>clear</a>( <span class='pre'>[fillStyle]</span> ) : <a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Clear the layer, optionally by filling it with a given style. ...</div><div class='long'><p>Clear the layer, optionally by filling it with a given style.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fillStyle</span> : Mixed (optional)<div class='sub-desc'><p>A canvas graphics context fill style. If not passed, the Layer will\n  simply be cleared. If passed, the Layer will be filled with the given\n  style.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-draw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/drawing.html#Layer-method-draw' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-method-draw' class='name expandable'>draw</a>( <span class='pre'>[ctx], [x], [y]</span> ) : <a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Draw the Layer. ...</div><div class='long'><p>Draw the Layer.</p>\n\n<p>This method can be invoked in two ways:</p>\n\n<ul>\n<li><code>draw(x, y)</code></li>\n<li><code>draw(ctx, x, y)</code></li>\n</ul>\n\n\n<p>All parameters are optional either way.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ctx</span> : <a href=\"#!/api/CanvasRenderingContext2D\" rel=\"CanvasRenderingContext2D\" class=\"docClass\">CanvasRenderingContext2D</a> (optional)<div class='sub-desc'><p>A canvas graphics context onto which this Layer should be drawn. This is\n  useful for drawing onto other Layers. If not specified, defaults to the\n  <a href=\"#!/api/global-property-context\" rel=\"global-property-context\" class=\"docClass\">global context</a> for the default canvas.</p>\n</div></li><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>An x-coordinate on the canvas specifying where to draw the upper-left\n  corner of the Layer. The actual position that the coordinate equates to\n  depends on the value of the\n  <a href=\"#!/api/Layer-property-relative\" rel=\"Layer-property-relative\" class=\"docClass\">Layer&#39;s &quot;relative&quot; property</a>. Defaults to the\n  <a href=\"#!/api/Layer-property-x\" rel=\"Layer-property-x\" class=\"docClass\">Layer&#39;s &quot;x&quot; property</a> (which defaults to 0 [zero]).</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>A y-coordinate on the canvas specifying where to draw the upper-left\n  corner of the Layer. The actual position that the coordinate equates to\n  depends on the value of the\n  <a href=\"#!/api/Layer-property-relative\" rel=\"Layer-property-relative\" class=\"docClass\">Layer&#39;s &quot;relative&quot; property</a>. Defaults to the\n  <a href=\"#!/api/Layer-property-y\" rel=\"Layer-property-y\" class=\"docClass\">Layer&#39;s &quot;y&quot; property</a> (which defaults to 0 [zero]).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-positionOverCanvas' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/drawing.html#Layer-method-positionOverCanvas' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-method-positionOverCanvas' class='name expandable'>positionOverCanvas</a>( <span class='pre'></span> ) : HTMLElement<span class=\"signature\"></span></div><div class='description'><div class='short'>Position the Layer's canvas over the primary canvas. ...</div><div class='long'><p>Position the Layer's canvas over the primary canvas.</p>\n\n<p>This is an alternative to drawing the Layer directly onto the primary\ncanvas. It is mostly useful when the <code>relative</code> property is <code>\"canvas\"</code>.\nIt is also useful when the primary canvas is scaled with\n<a href=\"#!/api/World-method-scaleResolution\" rel=\"World-method-scaleResolution\" class=\"docClass\">World.scaleResolution</a> but this Layer should stay a consistent size.\nHowever, since it is literally in front of the primary canvas, any other\nLayers that need to be drawn in front of this one must also be positioned\nover the primary canvas instead of drawn directly onto it.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'><p>A jQuery representation of a div containing the Layer's canvas.</p>\n</div></li></ul></div></div></div><div id='method-scroll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/drawing.html#Layer-method-scroll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-method-scroll' class='name expandable'>scroll</a>( <span class='pre'>x, y, [p]</span> ) : <a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Scroll the Layer. ...</div><div class='long'><p>Scroll the Layer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The horizontal distance the target has shifted.</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The vertical distance the target has shifted.</p>\n</div></li><li><span class='pre'>p</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The parallax factor. Defaults to <a href=\"#!/api/Layer-property-parallax\" rel=\"Layer-property-parallax\" class=\"docClass\">this.parallax</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-showCanvasOverlay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/drawing.html#Layer-method-showCanvasOverlay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-method-showCanvasOverlay' class='name expandable'>showCanvasOverlay</a>( <span class='pre'></span> ) : HTMLElement<span class=\"signature\"></span></div><div class='description'><div class='short'>Display this Layer's canvas in an overlay (for debugging purposes). ...</div><div class='long'><p>Display this Layer's canvas in an overlay (for debugging purposes).</p>\n\n<p>Clicking the overlay will remove it.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'><p>A jQuery representation of a div containing the Layer's canvas.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});