<?php

/* display/export/template_options.twig */
class __TwigTemplate_b5dddffadd48237c22b6bcb12c39491c0a4a686ce2e56e11ddde182e85db1684 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<option value=\"\">-- ";
        echo _gettext("Select a template");
        echo " --</option>

";
        // line 3
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["templates"]) ? $context["templates"] : null));
        foreach ($context['_seq'] as $context["_key"] => $context["template"]) {
            // line 4
            echo "    <option value=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["template"], "id", []), "html", null, true);
            echo "\"";
            echo ((($this->getAttribute($context["template"], "id", []) == (isset($context["selected_template"]) ? $context["selected_template"] : null))) ? (" selected") : (""));
            echo ">
        ";
            // line 5
            echo twig_escape_filter($this->env, $this->getAttribute($context["template"], "name", []), "html", null, true);
            echo "
    </option>
";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['template'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
    }

    public function getTemplateName()
    {
        return "display/export/template_options.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  36 => 5,  29 => 4,  25 => 3,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "display/export/template_options.twig", "E:\\phpstudy_pro\\WWW\\biyesheji\\phpMyAdmin4.8.5\\templates\\display\\export\\template_options.twig");
    }
}
