# <RctTable>

Table component written in Reactjs

## How to use it

    <ReaktTable
      columns={['name', 'age']}
      data={[ { name: 'John Doe', age: 45 } ]}
    />

## Props

| Prop       | Description                                                                                   | Type          | Default |
| ---------- | --------------------------------------------------------------------------------------------- | ------------- | ------- |
| columns    | Receives an array of strings                                                                  | array         | []      |
| rows       | Receives an array of objects with properties matching one of the items defined in the columns | array<object> | []      |
| isSortable | Receives a boolean value to control the ability to sort columns                               | boolean       | false   |
