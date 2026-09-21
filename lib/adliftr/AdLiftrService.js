/**
 * Camada server-side para a futura integração com o AdLiftr.
 * Nenhuma chave é enviada ao navegador e nenhuma campanha é publicada daqui
 * sem uma configuração explícita do ambiente e uma confirmação do operador.
 */
class AdLiftrService {
  constructor({ apiKey = process.env.ADLIFTR_API_KEY, baseUrl = process.env.ADLIFTR_API_URL } = {}) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  get connected() {
    return Boolean(this.apiKey && this.baseUrl);
  }

  assertConnected() {
    if (!this.connected) {
      const error = new Error('AdLiftr não conectado. Configure ADLIFTR_API_KEY e ADLIFTR_API_URL apenas no ambiente do servidor.');
      error.code = 'ADLIFTR_NOT_CONNECTED';
      throw error;
    }
  }

  friendlyError(status) {
    return ({
      401: 'Não foi possível autenticar no AdLiftr. Verifique a configuração do servidor.',
      403: 'A conta conectada não tem permissão para esta ação.',
      404: 'O recurso solicitado não foi encontrado no AdLiftr.',
      429: 'O limite de consultas foi atingido. Tente novamente em alguns instantes.',
      500: 'O AdLiftr apresentou uma instabilidade. Tente novamente mais tarde.',
    })[status] || 'Não foi possível concluir a operação no AdLiftr.';
  }

  // Pontos de extensão. A implementação HTTP deve seguir a documentação vigente
  // do AdLiftr quando a URL e as credenciais forem autorizadas pela agência.
  async listConnections() { this.assertConnected(); throw new Error('Endpoint AdLiftr ainda não configurado.'); }
  async listAccounts() { this.assertConnected(); throw new Error('Endpoint AdLiftr ainda não configurado.'); }
  async createPausedCampaign() { this.assertConnected(); throw new Error('Endpoint AdLiftr ainda não configurado.'); }
  async getCampaign() { this.assertConnected(); throw new Error('Endpoint AdLiftr ainda não configurado.'); }
  async updateCampaign() { this.assertConnected(); throw new Error('Endpoint AdLiftr ainda não configurado.'); }
  async pauseCampaign() { this.assertConnected(); throw new Error('Endpoint AdLiftr ainda não configurado.'); }
  async activateCampaign() { this.assertConnected(); throw new Error('Endpoint AdLiftr ainda não configurado.'); }
  async getPerformance() { this.assertConnected(); throw new Error('Endpoint AdLiftr ainda não configurado.'); }
}

module.exports = { AdLiftrService };
