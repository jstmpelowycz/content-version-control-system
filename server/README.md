# Summary

1. To run project locally — run `npm run start:dev` in root directory (`./src`). You will see successful message in your terminal.
2. To run generation — run `npx prisma generate --schema=src/prisma/schema.prisma`.
3. To add supported topics to db, run `npx ts-node scripts/seed.ts`. The topics will appear in `SupportedTopic` collection in db.

## Files not present

Find files in the tg chat lol and put them in the root directory of the project. The files are:
```
.env
mongo-keyfile
```

Also find the file `Study-Match-Backend.postman_collection.json` and import it into postman.

## Run mongodb locally

```bash
docker compose build
docker compose up

docker exec -it mongo mongo admin --username root --password example --eval 'rs.initiate({_id: "rs0", members: [{_id: 0, host: "localhost:27017"}]})'

docker exec -it mongo mongo admin --username root --password example  --eval 'rs.status()'
```

Then connect using MongoDB compass with url `mongodb://root:example@localhost:27017/admin?authSource=admin&replicaSet=rs0` and create database `study-match-backend` and collection `User`

