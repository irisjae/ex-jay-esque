var { T, $, where, whereby, go } = require ('metamorphoses')

var Z = require ('sanctuary')
var Z$ = require ('sanctuary-def')
var Z_ = Z .unchecked

var R = require ('ramda')

var S = require ('s-js')

var map_defined = fn => _x =>
	!! (_x === undefined)
	? undefined
	: fn (_x)
var from_just: _x =>
	Z_ .fromMaybe (undefined) (_x),
var maybe_all = Z_ .sequence (Z .Maybe)

var every = _x =>
	where ((
		every = S .data (false),
		next = _ => {{
			;every (true)
			;setTimeout (next, _x) }},
		_ = setTimeout (next, _x) ) =>
	every)
var delay = time => {{
	var done = S .data (false)
	;setTimeout (_ => {{
		;done (true) }}
	, time)
	return done }}


module .exports = {
	T, $, where, whereby, go,
	Z, Z$, Z_,
	R, S,
	map_defined, from_just, maybe_all,
	every, delay }
