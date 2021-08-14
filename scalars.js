const gql = require('graphql-tag')
const {
  DateResolver,
  TimeResolver,
  DateTimeResolver,
  DurationResolver,
  UtcOffsetResolver,
  LocalDateResolver,
  LocalTimeResolver,
  LocalEndTimeResolver,
  EmailAddressResolver,
  NegativeFloatResolver,
  NegativeIntResolver,
  NonEmptyStringResolver,
  NonNegativeFloatResolver,
  NonNegativeIntResolver,
  NonPositiveFloatResolver,
  NonPositiveIntResolver,
  PhoneNumberResolver,
  PositiveFloatResolver,
  PositiveIntResolver,
  PostalCodeResolver,
  UnsignedFloatResolver,
  UnsignedIntResolver,
  URLResolver,
  BigIntResolver,
  LongResolver,
  SafeIntResolver,
  UUIDResolver,
  GUIDResolver,
  HexColorCodeResolver,
  HSLResolver,
  HSLAResolver,
  IPv4Resolver,
  IPv6Resolver,
  ISBNResolver,
  MACResolver,
  PortResolver,
  RGBResolver,
  RGBAResolver,
  USCurrencyResolver,
  CurrencyResolver,
  JSONResolver,
  JSONObjectResolver,
  ObjectIDResolver,
  ByteResolver
  // VoidResolver
} = require('graphql-scalars')

// const { GraphQLUpload } = require('graphql-upload')
// todo: why the heck does the world fall down when
// trying to use this resolver for the Upload scalar???
// I seem to have to defy the documentation... strange

const typeDefs = gql`
  scalar Date
  scalar Time
  scalar DateTime
  scalar Duration
  scalar UtcOffset
  scalar LocalDate
  scalar LocalTime
  scalar LocalEndTime
  scalar EmailAddress
  scalar NegativeFloat
  scalar NegativeInt
  scalar NonEmptyString
  scalar NonNegativeFloat
  scalar NonNegativeInt
  scalar NonPositiveFloat
  scalar NonPositiveInt
  scalar PhoneNumber
  scalar PositiveFloat
  scalar PositiveInt
  scalar PostalCode
  scalar UnsignedFloat
  scalar UnsignedInt
  scalar URL
  scalar ObjectID
  scalar BigInt
  scalar Long
  scalar SafeInt
  scalar UUID
  scalar GUID
  scalar HexColorCode
  scalar HSL
  scalar HSLA
  scalar IPv4
  scalar IPv6
  scalar ISBN
  scalar MAC
  scalar Port
  scalar RGB
  scalar RGBA
  scalar USCurrency
  scalar Currency
  scalar JSON
  scalar JSONObject
  scalar Byte
  scalar Void
  scalar Upload
`

const debug = require('debug')('plugins:scalars')
const pkg = require('./package.json')

module.exports = {
  name: 'scalars',
  version: pkg.version,
  manifest: {},
  init: (api, config) => {
    debug(`[${pkg.name} v${pkg.version}] init`)
    if (!api.graphql) {
      throw new Error(`${pkg.name} plugin requires graphql plugin`)
    }

    const resolvers = {
      ObjectID: ObjectIDResolver,

      Date: DateResolver,
      Time: TimeResolver,
      DateTime: DateTimeResolver,
      Duration: DurationResolver,
      UtcOffset: UtcOffsetResolver,
      LocalDate: LocalDateResolver,
      LocalTime: LocalTimeResolver,
      LocalEndTime: LocalEndTimeResolver,

      NonPositiveInt: NonPositiveIntResolver,
      PositiveInt: PositiveIntResolver,
      NonNegativeInt: NonNegativeIntResolver,
      NegativeInt: NegativeIntResolver,
      NonPositiveFloat: NonPositiveFloatResolver,
      PositiveFloat: PositiveFloatResolver,
      NonNegativeFloat: NonNegativeFloatResolver,
      NegativeFloat: NegativeFloatResolver,
      UnsignedFloat: UnsignedFloatResolver,
      UnsignedInt: UnsignedIntResolver,
      BigInt: BigIntResolver,
      Long: LongResolver,
      SafeInt: SafeIntResolver,

      EmailAddress: EmailAddressResolver,
      URL: URLResolver,
      PhoneNumber: PhoneNumberResolver,
      PostalCode: PostalCodeResolver,
      NonEmptyString: NonEmptyStringResolver,

      UUID: UUIDResolver,
      GUID: GUIDResolver,

      HexColorCode: HexColorCodeResolver,
      HSL: HSLResolver,
      HSLA: HSLAResolver,
      RGB: RGBResolver,
      RGBA: RGBAResolver,

      IPv4: IPv4Resolver,
      IPv6: IPv6Resolver,
      MAC: MACResolver,
      Port: PortResolver,

      ISBN: ISBNResolver,

      USCurrency: USCurrencyResolver,
      Currency: CurrencyResolver,
      JSON: JSONResolver,
      JSONObject: JSONObjectResolver,
      Byte: ByteResolver

      // Upload: GraphQLUpload
    }
    api.graphql.addTypeDefs(typeDefs)
    api.graphql.addResolvers(resolvers)
  }
}
