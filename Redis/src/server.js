import { createClient, SchemaFieldTypes } from 'redis';

const redis = async () => {
  const client = createClient({
    url: 'redis://127.0.0.1:6379',
  });

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  //   Create index
  const schema = {
    '$.brand': {
      type: SchemaFieldTypes.TEXT,
      SORTABLE: true,
      AS: 'brand',
    },
    '$.model': {
      type: SchemaFieldTypes.TEXT,
      AS: 'model',
    },
    '$.description': {
      type: SchemaFieldTypes.TEXT,
      AS: 'description',
    },
    '$.price': {
      type: SchemaFieldTypes.NUMERIC,
      AS: 'price',
    },
    '$.condition': {
      type: SchemaFieldTypes.TAG,
      AS: 'condition',
    },
  };

  try {
    const bicycles = await client.ft.create('idx:bicycle', schema, {
      ON: 'JSON',
      PREFIX: 'bicycle:',
    });

    await Promise.all(bicycles.map((bicycle, i) => client.json.set(`bicycle:${i}`, '$', bicycle)));
  } catch (e) {
    if (e.message === 'Index already exists') {
      console.log('Index exists already, skipped creation.');
    } else {
      // Something went wrong, perhaps RediSearch isn't installed...
      console.error(e);
      process.exit(1);
    }
  }
};

redis();
