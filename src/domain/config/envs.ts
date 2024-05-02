import 'dotenv/config'
import { get } from 'env-var'

export class Envs {
  public static get getEnvs () {
    return {
      PORT: get('PORT').required().asPortNumber(),
      CONTEXT_PATH: get('CONTEXT_PATH').required().asString(),
      CONTACT_POINTS: get('CONTACT_POINTS').required().asString(),
      LOCAL_DATA_CENTER: get('LOCAL_DATA_CENTER').required().asString(),
      KEYSPACE: get('KEYSPACE').required().asString()
    }
  }
}
