/* actual code of the extension */
import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the hello_world extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'hello_world:plugin',
  description: 'Minimal JupyterLab extension.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('The JupyterLab main application:', app);
  }
};

export default plugin;