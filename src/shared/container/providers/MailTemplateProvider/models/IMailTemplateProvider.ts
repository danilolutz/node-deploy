import IParseMailTemplateDTO from '../dto/IParseMailTemplateDto';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
