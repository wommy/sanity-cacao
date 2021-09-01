export const ingredients = {
  type:'document',
  name:'ingredients',
  fields:[
    { type:'string', name:'ingredient' },
  ]
}

export const salads = {
  type:'document',
  name:'salads',
  fields:[
    { type:'string', name:'salads' },
    { type:'array', name:'ingredients', of:[{ type:'reference', name:'ingredient', to:[{ type:'ingredients' }] }] }
  ]
}

export const powerbowls = {
  type:'document',
  name:'powerbowls',
  fields:[
    { type:'string', name:'powerbowls' },
    { type:'array', name:'ingredients', of:[{ type:'reference', name:'ingredient', to:[{ type:'ingredients' }] }] }
  ]
}

export const wrapSandwich = {
  type:'document',
  name:'wrapSandwich',
  fields:[
    { type:'string', name:'wrapSandwich' },
    { type:'array', name:'ingredients', of:[{ type:'reference', name:'ingredient', to:[{ type:'ingredients' }] }] }
  ]
}

export const sidesExtras = {
  type:'document',
  name:'sidesExtras',
  fields:[
    { type:'string', name:'sidesExtras' },
  ]
}

export const ingredients2 = {
  type:'document',
  name:'ingredients2',
  fields:[
    { type:'string', name:'ingredient' },
  ]
}

export const drinks = {
  type:'document',
  name:'drinks',
  fields:[
    { type:'string', name:'drinks' },
    { type:'array', name:'ingredients', of:[{ type:'reference', name:'ingredient', to:[{ type:'ingredients2' }] }] }
  ]
}

export const kids = {
  type:'document',
  name:'kids',
  fields:[
    { type:'string', name:'kids' },
  ]
}

