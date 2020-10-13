import React from'react';
import ReactDOM from 'react-dom';
import {Formik, Field, Form} from 'formik'

function LocalFormComponent(){
    return(
  <div>
    <Formik
      initialValues={{
        toggle: false,
        checked: [],
      }}
    >
      {({ values }) => (
        <Form>
         
                  
          <div id="checkbox-group"><p>Informe as características do local de retirada:</p></div>
          <div role="group" aria-labelledby="checkbox-group">
            <div><label>
              <Field type="checkbox" name="checked" value="One" />
              É andar térreo (seja casa ou apartamento)
            </label></div>
            <div><label>
              <Field type="checkbox" name="checked" value="Two" />
              Tem escada
            </label></div>
            <div><label>
              <Field type="checkbox" name="checked" value="Three" />
              Tem elevador
            </label></div>
            <div><label>
              <Field type="checkbox" name="checked" value="Four" />
              Existe outro elemento de difícil acesso?
            </label></div>
           <div ><label>
              <Field name="textA" placeholder="Descreva..."/>
            </label></div>
            
          </div>
        </Form>
      )}
    </Formik>

  </div>
)



}export default LocalFormComponent