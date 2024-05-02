import cassandra from 'cassandra-driver'
import { Envs } from '../config'
const distance = cassandra.types.distance

const options = {
  contactPoints: [Envs.getEnvs.CONTACT_POINTS],
  localDataCenter: Envs.getEnvs.LOCAL_DATA_CENTER,
  keyspace: Envs.getEnvs.KEYSPACE,
  pooling: {
    coreConnectionsPerHost: {
      [distance.local]: 2,
      [distance.remote]: 1
    }
  }
}

export const poolCasandra = new cassandra.Client(options)
